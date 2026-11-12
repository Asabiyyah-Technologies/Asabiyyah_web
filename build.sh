#!/usr/bin/env bash
set -e

echo "=== Asabiyyah Technologies Ltd Build Hook ==="

if command -v python3 &>/dev/null; then
    echo "Using python3: $(python3 --version)"
    python3 build.py
elif command -v python &>/dev/null; then
    echo "Using python: $(python --version)"
    python build.py
else
    echo "Error: Python runtime not found in build environment."
    exit 1
fi

echo "=== Build Complete ==="
