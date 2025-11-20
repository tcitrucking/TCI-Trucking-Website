#!/bin/bash

# TCI Trucking LLC - Website Update Script
echo "🚛 TCI Trucking Website Updater"
echo "=================================="

# Update all logo alt texts
echo "📝 Updating logo text across all pages..."
find . -maxdepth 1 -name "*.html" -exec sed -i 's/alt="Trucking Transportation and Logistics HTML Template"/alt="TCI Trucking LLC - Professional Transport Service"/g' {} \;

# Update page titles
echo "🏷️  Updating page titles..."
find . -maxdepth 1 -name "*.html" -exec sed -i 's/<title>Trucking - Transportation and Logistics Website Template<\/title>/<title>TCI Trucking LLC - Professional Transport Service<\/title>/g' {} \;

# Update meta descriptions
echo "�� Updating meta descriptions..."
find . -maxdepth 1 -name "*.html" -exec sed -i 's/Trucking is transportation and Logistics website template/TCI Trucking LLC - Professional Trucking and Transport Services/g' {} \;

# Update any remaining template text
echo "🔄 Updating any remaining template text..."
find . -maxdepth 1 -name "*.html" -exec sed -i 's/Trucking Transportation and Logistics/TCI Trucking LLC/g' {} \;

echo "✅ Website update complete!"
echo "📊 Files updated:"
find . -maxdepth 1 -name "*.html" -exec grep -l "TCI Trucking" {} \; | wc -l
