CSV JSON Extractor
==================

this small nifty tool covers a tiny use case to extract a value from objects and subobjects in csv's into separate columns.


Usage
-------------------

typically, to use you'd run:

	node extract.js -c YOUR_COLUMN -f YOUR_FILENAME_WITHOUT_EXTENSION -e PROPERTY_TO_EXTRACT
	
	YOUR_COLUMN: name of the csv column to manipulate
	YOUR_FILENAME_WITHOUT_EXTENSION: speaks for itself, remember to provide the relative/absolute path to your file if its not placed inside the cloned repository
	PROPERTY_TO_EXTRACT: propery the tool will search for and extract


Pre-requisites
--------------

First make sure you have [nodeJS] installed
Then you'll need to install a few modules,

	npm install

should do it.


[nodeJS]: https://nodejs.org/en/
