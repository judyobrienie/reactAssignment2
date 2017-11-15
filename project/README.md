# Assignment 1 - ReactJS app.

Name: Judy OBrien

## Overview.
I tried to build a website for a business Transcages Ireland.  In this website I wanted to show products(cages) and have a 'Contact Us' form so that customers
can contact owner.  I further tried to add in a login page so that the admin could log in and change the the list of cages or delete cages.


 . . . . . List of user features . . . . 
 
 + List of Searchable Cages (Alphabeth or Price)
 + Login Page
 + Contact Us Page
 + Leave a commont on a Post
 + Add a Post
 + Follow link to social media sites

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 

+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ lodash
+ react-router
+ social icons
+ json-server 

Instructions: : npm install + npm start 
to start server : json-server --watch users.json --port 3004   to to localhost:3004/users
				

## Data Model Design.

![][image1]

## App Component Design.

![][image10]

## UI Design.

![][image2]
![][image3]
![][image4]
![][image5]
![][image6]
![][image7]
![][image8]
![][image9]


## Routing.
.
+ / - home page
+ /post/:postId - displays all posts by id
+ /login - login page
+ /cages/ - list of cages
+ /gallery - photos of cages
+ /gallery/cages/:id - individual cage by id
+ /contact - contact us form


## Extra features
Social Icons
Dislike button and linked it to the counter to decrement when clicked

## Independent learning.
Contact us Form
Login Page
Social Icons


[image1]: ./design.jpg
[image2]: ./home.PNG
[image3]: ./gallery.PNG
[image4]: ./contactUs.PNG
[image5]: ./login.PNG
[image6]: ./addComment.PNG
[image7]: ./individualCage.PNG
[image8]: ./cage_list.PNG
[image9]: ./json-server.PNG
[image10]: ./designing.jpg
