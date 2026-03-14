#!/bin/bash
echo "🚛 Updating ALL pages to TCI Trucking LLC..."
find . -maxdepth 1 -name "*.html" -exec sed -i 's|<title>Trucking - Transportation and Logistics Website Template</title>|<title>TCI Trucking LLC - Professional Transport Service</title>|g' {} \;
find . -maxdepth 1 -name "*.html" -exec sed -i 's|alt="Trucking Transportation and Logistics HTML Template"|alt="TCI Trucking LLC - Professional Transport Service"|g' {} \;
find . -maxdepth 1 -name "*.html" -exec sed -i 's|Trucking is transportation and Logistics website template|TCI Trucking LLC - Professional Trucking and Transport Services|g' {} \;
echo "✅ All pages updated!"
