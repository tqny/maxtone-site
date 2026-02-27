#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "README.md"
  "CONTRIBUTING.md"
  "CHANGELOG.md"
  "docs/EVIDENCE_STANDARD.md"
  "docs/adr/0000-template.md"
  "docs/postmortems/TEMPLATE.md"
  "docs/metrics/WEEKLY_METRICS_TEMPLATE.md"
  "docs/demos/DEMO_LOG_TEMPLATE.md"
  ".github/PULL_REQUEST_TEMPLATE.md"
  ".github/ISSUE_TEMPLATE/bug_report.md"
  ".github/ISSUE_TEMPLATE/feature_request.md"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Missing required file: $file"
    exit 1
  fi
done

echo "Evidence check passed."
