# HW 10 OOP: Node.js Team Profile Generator

## Overview

This is a Node.js command line application that takes in user input for details regarding different employees or managers to generate a team profile page with HTML.

Testing is a key element of this application to ensure proper functionality by using a collection of Jest unit tests.

![Generated team webpage](demo.gif)

The demo above creates an HTML page which can be viewed here: 


## Usage Instructions

1. User Inputs

The CLI will prompt the user for information regarding the team manager and then proceed with prompts for other team members.  This app allows any amount of team members and various titles for the members.  All inputs are validated to make sure that it's in the correct format.

2. Team Page Output

After user has inputted information for the team and presses submit, the application will generate an HTML file named 'index' inside the 'docs/' directory that displays a styled team roster based on the user input.  Each team member will display their name, title, ID, and title-specific property.


## Installation

1. Run `npm install` or `npm i` to install npm package dependencies (inquirer, jest)
2. Run `npm start` which will start the application and begin with inquirer prompts
3. To run tests, enter `npm test`


## Folder Structure

The folder structure of the application is as follows:

```
docs/          // Rendered HTML output that will appear on GitHub pages
html/          // Templates for main HTML <body> and employee <div>s
images/        // Images used on the GitHub repo
lib/           // Employee classes as well as helper code to generate HTML
test/          // Jest tests
input.js       // Inquirer inputs
app.js         // Runs the application and main functions
```

The HTML pages are contained inside the html/ folder.  The main.html is the main template where all the other elements get generated.  Regex is used to create dynamic markup for each type of employee: Engineer, Intern, Manager