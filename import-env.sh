# save as import-env.sh and run: bash import-env.sh .env.production production
set -euo pipefail

FILE="${1:-}"
TARGET="${2:-}"   # development | preview | production

if [ -z "$FILE" ] || [ -z "$TARGET" ]; then
  echo "Usage: bash import-env.sh <.env file> <development|preview|production>"
  exit 1
fi

grep -v '^\s*$' "$FILE" | grep -v '^\s*#' | while IFS='=' read -r key rest; do
  # keep the full value including '=' if present
  value="${rest}"
  # strip possible surrounding quotes
  value="${value%\"}"; value="${value#\"}"
  value="${value%\'}"; value="${value#\'}"

  # Pipe the value to Vercel so it doesn't prompt
  printf "%s" "$value" | vercel env add "$key" "$TARGET" >/dev/null
  echo "Added $key to $TARGET"
done
