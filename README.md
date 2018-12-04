# ShowGo :notes: [![Build Status](https://travis-ci.com/addisonverger/Phase-1-Group-Project.svg?branch=master)](https://travis-ci.com/addisonverger/Phase-1-Group-Project)
ShowGo is a site that allows you to search for your favorite artists, see if they are playing in your area. Then, discover similar artists and find out about other local shows. :guitar: :metal:

## Team Members
Joseph Madamba  
Becca Randall  
Luis Renteria  
Addison Verger

## Hosting
showGo is available via [Amazon S3](https://aws.amazon.com/s3/) cloud storage

## JavaScript libraries
showGo uses 2 JavaScript libraries:
* **[ScrollMagic](http://scrollmagic.io/):** The ScrollMagic javascript library is used to create an infinitely scrolling page for the results of a showGo search. It utilizes an ajax load of additional search results once the user hits the bottom of the webpage.

* **[JQuery](https://jquery.com/):** showGo uses the JQuery Javascript library for event handling and Ajax. 

## CSS Framework
ShowGo utilizes the [Bulma](https://bulma.io/) CSS framework.

## APIs
ShowGo integrates the [TasteDive](https://tastedive.com/read/api) API & [Bandsintown](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0) API. 
TasteDive provides similar artists, based on a search, as well as basic artist info.
Bandsintown provides concert information for the selected artist.

## Automated Tests
This repo uses Travis CI to perform automated tests. The Travis CI build checks for JavaScript Standard Style formatting. Build should pass if all JS code is compliant with the StandardJS styleguide. This build uses [onchange](https://github.com/Qard/onchange) to continually check formatting each time code updates are made. 

Click the status badge at the top of this README to see details of the build.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
