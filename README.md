# Deposit Refund Systems for a More Circular Economy

## Links
* [Prezi Presentation: *Creating a Deposit-Refund System*](https://prezi.com/view/XxnK7C87WarT9tln7qJG/)


## Steps to Create Map 

### Create Google sheet and convert to CSV
1. Label columns. If linked url needed, create two columns: citation column (named "citation-#-title") and url column (named "citation-#-url").
1. Each row is a different record. Insert data into rows.
1. Once data entry is completed. Convert to csv and download to your computer. ("File" > "Download" > "Comma-Separated Values") 

### Convert csv to GeoJSON 
1. Upload csv file to [Convert CSV to GeoJSON](http://convertcsv.com/csv-to-geojson.htm)
1. Download GeoJSON to computer, upload to GitHub, and name with date. (On GitHub click "data" > "upload files" > save date under "commit changes") 

### Add GeoJSON and csv to GitHub repository

### To add map TBD

## GeoJSON Links
* [GeoJSON.org](http://geojson.org/)
* [GeoJSON.io](http://geojson.io)
* [Convert CSV to GeoJSON](http://convertcsv.com/csv-to-geojson.htm)

## Mapbox links
* [Mapbox](https://www.mapbox.com/)
* [Mapbox documentation](https://docs.mapbox.com/)
* [Mapbox JS API](https://docs.mapbox.com/mapbox.js/api/v3.2.1/)
* [Add custom markers in Mapbox GL JS](https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/)
* [Maki Icons | By Mapbox](https://www.mapbox.com/maki-icons/)
* [List of built in icons](https://gis.stackexchange.com/questions/219241/list-of-available-marker-symbols)

## Editors
* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* [GitHub Desktop](https://desktop.github.com/)


## Notes
Key-value pairs have a colon between them as in "key" : "value". Each key-value pair is separated by a comma, so the middle of a JSON looks like this: "key" : "value", "key" : "value", "key": "value". In our example above, the first key-value pair is "first_name" : "Sammy".

JSON keys are on the left side of the colon. They need to be wrapped in double quotation marks, as in "key", and can be any valid string. Within each object, keys need to be unique. These key strings can include whitespaces, as in "first name", but that can make it harder to access when you’re programming, so it’s best to use underscores, as in "first_name".
