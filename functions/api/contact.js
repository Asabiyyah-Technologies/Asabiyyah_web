/**
 * Cloudflare Pages Function: /api/contact
 * Handles corporate project inquiries and pilot requests with validation,
 * honeypot bot filtering, and secure routing.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  };

  try {
    const payload = await request.json();

    const {
      fullName,
      organization,
      email,
      phone,
      inquiryType,
      projectScope,
      timeline,
      _hp_company,
      _timestamp,
    } = payload;

    // 1. Honeypot Bot Trap: If hidden bot field is filled, silently return success
    if (_hp_company && _hp_company.trim().length > 0) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Inquiry received. Thank you.',
          inquiry_id: 'ASB-TRAP-' + Date.now().toString(36).toUpperCase(),
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 2. Bot Velocity Check: Form must take at least 1.5 seconds to fill
    const now = Date.now();
    if (_timestamp && (now - Number(_timestamp)) < 1500) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Inquiry received.',
          inquiry_id: 'ASB-VEL-' + Date.now().toString(36).toUpperCase(),
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 3. Strict Input Validation
    if (!fullName || fullName.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: 'Full name is required (minimum 2 characters).' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: 'A valid email address is required.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return new Response(
        JSON.stringify({ success: false, error: 'A valid telephone / WhatsApp number is required.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (!projectScope || projectScope.trim().length < 10) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a brief project summary (minimum 10 characters).' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 4. Data Sanitization (Escape potential HTML tags)
    const sanitize = (str) =>
      str ? String(str).replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[m])) : '';

    const cleanData = {
      fullName: sanitize(fullName.trim()),
      organization: sanitize((organization || 'Independent').trim()),
      email: email.trim().toLowerCase(),
      phone: sanitize(phone.trim()),
      inquiryType: sanitize(inquiryType || 'General Inquiry'),
      projectScope: sanitize(projectScope.trim()),
      timeline: sanitize(timeline || 'Immediate'),
      receivedAt: new Date().toISOString(),
      inquiryId: 'ASB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
    };

    // 5. Secure Outbound Forwarding (If Webhook or Resend API is configured in Cloudflare Environment)
    if (env && env.INQUIRY_WEBHOOK_URL) {
      try {
        await fetch(env.INQUIRY_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cleanData),
        });
      } catch (forwardErr) {
        console.error('Outbound webhook forwarding failed:', forwardErr.message);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        inquiry_id: cleanData.inquiryId,
        message: 'Thank you. Your inquiry has been routed to our leadership team. We will review your parameters and respond within 24 business hours.',
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid submission payload.' }),
      { status: 400, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
