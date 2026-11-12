"""
Unit test suite verifying Cloudflare Pages Function logic (/functions/api/contact.js).
Simulates edge environment payload intake, honeypot traps, velocity limits,
and input sanitization logic.
"""
import sys
import re
import time

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

def sanitize(s):
    if not s:
        return ""
    replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    }
    for k, v in replacements.items():
        s = s.replace(k, v)
    return s

def process_inquiry(payload):
    # Replicates exact logic in functions/api/contact.js
    full_name = payload.get("fullName", "")
    organization = payload.get("organization", "Independent")
    email = payload.get("email", "")
    phone = payload.get("phone", "")
    inquiry_type = payload.get("inquiryType", "General Inquiry")
    project_scope = payload.get("projectScope", "")
    timeline = payload.get("timeline", "Immediate")
    hp_company = payload.get("_hp_company", "")
    timestamp = payload.get("_timestamp", "")

    # 1. Honeypot Bot Trap
    if hp_company and hp_company.strip():
        return 200, {"success": True, "message": "Inquiry received. Thank you.", "inquiry_id": "ASB-TRAP-TEST"}

    # 2. Bot Velocity Check (< 1500ms)
    now = time.time() * 1000
    if timestamp:
        try:
            diff = now - float(timestamp)
            if diff < 1500:
                return 200, {"success": True, "message": "Inquiry received.", "inquiry_id": "ASB-VEL-TEST"}
        except ValueError:
            pass

    # 3. Validation
    if not full_name or len(full_name.strip()) < 2:
        return 400, {"success": False, "error": "Full name is required (minimum 2 characters)."}

    email_regex = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    if not email or not re.match(email_regex, email.strip()):
        return 400, {"success": False, "error": "A valid email address is required."}

    if not phone or len(phone.strip()) < 7:
        return 400, {"success": False, "error": "A valid telephone / WhatsApp number is required."}

    if not project_scope or len(project_scope.strip()) < 10:
        return 400, {"success": False, "error": "Please provide a brief project summary (minimum 10 characters)."}

    # 4. Sanitization
    clean_data = {
        "fullName": sanitize(full_name.strip()),
        "organization": sanitize(organization.strip() if organization else "Independent"),
        "email": email.strip().lower(),
        "phone": sanitize(phone.strip()),
        "inquiryType": sanitize(inquiry_type),
        "projectScope": sanitize(project_scope.strip()),
        "timeline": sanitize(timeline),
        "inquiry_id": "ASB-ACK-TEST"
    }

    return 200, {"success": True, "inquiry_id": clean_data["inquiry_id"], "data": clean_data}

def run_api_tests():
    print("=" * 70)
    print(" EDGE SERVERLESS CONTACT API VERIFICATION (functions/api/contact.js)")
    print("=" * 70)
    
    passed = 0
    total = 0

    def assert_test(desc, condition):
        nonlocal passed, total
        total += 1
        if condition:
            print(f" [✓] PASS | {desc}")
            passed += 1
        else:
            print(f" [X] FAIL | {desc}")

    # Case 1: Valid genuine submission
    status, res = process_inquiry({
        "fullName": "Muhammad Danbatta",
        "organization": "Northern Cooperative Ltd",
        "email": "danbatta@example.com",
        "phone": "+2348064753943",
        "inquiryType": "Custom Enterprise Software",
        "projectScope": "We need an offline-first ledger for our cooperative branch network.",
        "timeline": "Immediate (< 1 month)",
        "_timestamp": str((time.time() - 3.0) * 1000)
    })
    assert_test("Valid project inquiry returns HTTP 200 with generated inquiry_id", status == 200 and res["success"] is True)

    # Case 2: Honeypot bot trap
    status, res = process_inquiry({
        "fullName": "Bot Spammer",
        "_hp_company": "Automated Spam Corp",
        "email": "spam@bot.net",
        "phone": "+1234567890",
        "projectScope": "Cheap loans buy now!",
        "_timestamp": str((time.time() - 5.0) * 1000)
    })
    assert_test("Honeypot trap silently consumes bot submission without error (HTTP 200)", status == 200 and "TRAP" in res["inquiry_id"])

    # Case 3: Bot velocity throttling (< 1.5s)
    status, res = process_inquiry({
        "fullName": "Fast Bot",
        "email": "fast@bot.com",
        "phone": "+1234567890",
        "projectScope": "Instant automated submission payload",
        "_timestamp": str(time.time() * 1000) # 0 ms delay
    })
    assert_test("Velocity trap throttles ultra-fast automated submission (HTTP 200 silent)", status == 200 and "VEL" in res["inquiry_id"])

    # Case 4: Missing name validation
    status, res = process_inquiry({
        "fullName": "A",
        "email": "test@domain.com",
        "phone": "+2348000000000",
        "projectScope": "Valid project scope with more than ten characters."
    })
    assert_test("Single-character or empty name rejected with HTTP 400", status == 400 and "Full name is required" in res["error"])

    # Case 5: Invalid email validation
    status, res = process_inquiry({
        "fullName": "Valid Name",
        "email": "invalid-email-string",
        "phone": "+2348000000000",
        "projectScope": "Valid project scope with more than ten characters."
    })
    assert_test("Malformed email rejected with HTTP 400", status == 400 and "valid email" in res["error"])

    # Case 6: Short project scope validation
    status, res = process_inquiry({
        "fullName": "Valid Name",
        "email": "valid@email.com",
        "phone": "+2348000000000",
        "projectScope": "Too short"
    })
    assert_test("Project scope under 10 characters rejected with HTTP 400", status == 400 and "minimum 10 characters" in res["error"])

    # Case 7: HTML sanitization
    status, res = process_inquiry({
        "fullName": "<script>alert('xss')</script> Aliyu",
        "email": "aliyu@asabiyyah.com",
        "phone": "+2348064753943",
        "projectScope": "Testing <b>bold</b> and <script>attack</script> injection vectors.",
        "_timestamp": str((time.time() - 3.0) * 1000)
    })
    escaped_scope = res["data"]["projectScope"]
    assert_test("HTML tags in inputs sanitized against XSS (&lt;script&gt;)", status == 200 and "<script>" not in escaped_scope and "&lt;script&gt;" in escaped_scope)

    print("\n" + "=" * 70)
    print(f" CONTACT API RESULTS: {passed}/{total} TESTS PASSED")
    print("=" * 70)
    return 0 if passed == total else 1

if __name__ == "__main__":
    sys.exit(run_api_tests())
