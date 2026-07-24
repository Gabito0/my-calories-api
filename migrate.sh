set -e

if [ -z "$1"]; then
  echo "Usage: ./migrate.sh <MigrationName>"
  exit 1
fi

echo "Building..."
npm run build

echo "Generating migration: $1..."
npm run typeorm migration:generate -- db/migrations/$1 -d db/datasource.ts

echo "Running migration..."
npm run typeorm migration:run -- -d db/datasource.ts

echo "Done. Starting app..."
npm run start:dev