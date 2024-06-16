# Title
 
MET CS 601 - Week 2 Homework Assignment


## Description

	The index.html file contains functionality for Drag and Drop. The user can drag elements from 2 sets of data. These sets are
various croissants and coffee. Dragging items from either of the 1 sets results in these items being dropped into their respective <div> elements.
There is validation in the drop functionality to ensure only croissants can be dropped into the container which reads 'Drag Croissants Here'
and coffee can be dropped into the container which reads 'Drag Coffee Here'.


## Requirements

A web browser, preferably Firefox (v. 125.0.3, 64 bit).


## Installation

 1) Save all of the files to the same location/directory. 
 2) Ensure there is a local server running the 'data_file'.json' file.
 3) This project was run against an installed local server using both Node.js and Express. 
 

## Usage

 1) Local server must be running.
 2) Check for endpoints - there should be 2: 1 for 'croissants' and 1 for 'coffee'.
 3) These endpoints must be modified, if necessary, in the 'PopulateItems()' function found in the 'script.js' file. 
 4) The endpoints found in #3 are the ones I used in my environment. These are listed below.
   a) "http://localhost:3000/pastries"
   b) "http://localhost:3000/hot-beverages"
 5) Open the index.html file in the desired web browser. 
 6) There are 4 <div> elements displayed.
 7) Drag either 'croissants' or 'coffee' items from the 2 left-most <div> elements to their relevant <div> elements on the right.
 8) The final output is either when all items have been dragged to their respective <div> elements or when the user is done.


## Validation

 1) 'index.html' at: https://validator.w3.org/#validate_by_upload
 2) 'style.css' at: https://jigsaw.w3.org/css-validator/#validate_by_upload
 3) 'script.js' at: https://esprima.org/demo/validate.html

