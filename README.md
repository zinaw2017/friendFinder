# FriendFinder
This is an application that uses Node.js and Express to run the web server, to serve up the application.  The application requests a user take a survey to help match them with other friends on the site.

You may go to (https://github.com/zinaw2017/friendFinder) to do the servey on heroku.

## Technologies used
The following technologies, tools, and npm packages were used:
* Javascript/Jquery
* Node.js
* NPM Packages
	* express
	* body-parser  
	* path

## Files and Folder Structure

* server.js - used to start the node.js web server.
* app - Main folder with sub folders data, public, and routing.
	* data - contains friends.js which holds an object array of data.
	* public - contains html files for the pages (home.html and survey.html), image folder (screen shots and background image)
	* routing - contains the following
		* api-routes.js file which contains all api routes (used for API Link)
			* '/friends' - is used to get all friends data and to post data for the current user filling out the survey.
		* html-routes.js file which contains all the html routes tha points to the appropriate page
			* '/' route will go to the home page.
			* '/survey' will go to the survey page.

## Getting Started

* Use git clone and run using server.js on the command line interface.
* use localhost:3000

### Friend Finder - Home Page

Click on the Take Survey button, to navigate to the survey home page

Fill out the survey and based on the scores for the questions, the application will take the difference of the scores based on the matches and will total the score.  If the total scores match then a modal will open to show the Best Match.

![Alt Text](app/public/images/bestmatchmodal.png?raw=true "Best Match Modal")

If the person submits the survery with any missing inputs, a modal will display to show a message:  Please fill out all fields before submitting!

![Alt Text](app/public/images/emptydatamodal.png?raw=true "Best Match Modal")

## Authors

* * zenahibzu- *Javascript, Node.js*

