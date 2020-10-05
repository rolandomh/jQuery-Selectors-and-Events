# jQuery-Selectors-and-Events

## lab3

301n19: Kale lesko, Rolondo Haynes 

10/04/2020

lab-03-repository
├── .eslintrc.json
├── .gitignore
├── css
│   ├── base.css
│   ├── layouts.css
│   ├── modules.css
│   └── reset.css
├── data
│   ├── page-1.json
│   └── page-2.json
├── index.html
├── js
│    └── app.js
└── README.md

Number and name of feature: #3 papination, templating, styling with flexbox


Estimate of time needed to complete: 10-12 hours

Start time: 3:00pm 10/4/20

Finish time: _____

Actual time needed to complete: _____

Feature 1: Pagination
Why are we implementing this feature?
As a user, I want to have the ability to view additional images so that my view does not become cluttered.
What are we going to implement?
Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

How are we implementing it?
Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
Reset the filters, then repopulate them using only keywords from the images currently being displayed.
Feature 2: Templating
Why are we implementing this feature?
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
What are we going to implement?
Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

How are we implementing it?
Create the appropriate Mustache template in your HTML with the same <h2>, <img>, and <p> elements as the jQuery template from the prior lab.
Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.
Feature 3: Styling with Flexbox
Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows

How are we implementing it?
Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.
Feature 4: Sort the images
Why are we implementing this feature?
As a user, I want to be able to sort the images so that there is an order to their rendering.
What are we going to implement?
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.
Stretch Goal: Detail view
Why are we implementing this feature?
As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.
What are we going to implement?
Given that a user wants to view the details of the image When the user clicks on an individual image Then the image should render larger on the screen with the description displayed

How are we implementing it?
Add a detail view which will display the image in a larger size in the center of the screen with a colored background.
The description should be shown now, as well.
When the user clicks off of the image, return to the grid view.
Use a transition or animation to show and hide the detail view of an image.
Stretch Goal: Fuzzy search
Why are we implementing this feature?
As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.
What are we going to implement?
Given that a user enters wants to view specific images When the user enters a character into the search field Then only the images matching the current set of characters should be displayed on the screen

How are we implementing it?
Create an input element to allow users to search for an image. It is up to you and your partner to decide if the user should be able to search by title, keyword, or both.
Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.
Submission Instructions
Complete your Feature Tasks for the day
Create a Pull Request (PR) back to the master branch of your repository
On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
A question within the context of today’s lab assignment
An observation about the lab assignment, or related ‘Ah-hah!’ moment
How long you spent working on this assignment


## lab2

301n19: Kale lesko, Rolondo Haynes 

10/1/2020

lab-02-repository
├── css
│   ├── base.css
│   ├── layouts.css
│   ├── modules.css
│   └── reset.css
├── data
│   └── page-1.json
├── index.html
├── js
│    └── app.js
├── .eslintrc.json
├── .gitignore
└── README.md

Number and name of feature: #1 display images

Estimate of time needed to complete: 8hours

Start time:  9:40pm 10/1/2020

Finish time: 9:00pm 10/3/2020

Actual time needed to complete: it was about 10 hours some of that was sitting in que wating for instructors

Add this information to your README.


Overview
In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

You have the option of using the provided index.html file, but it is not a requirement.

Resources
page-1.json
index.html
Time Estimate
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:


Feature #1: Display images
Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the photo gallery should display all of the images in the gallery

How are we implementing it?
Use AJAX, specifically $.ajax(), to read the provided JSON file.
Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.
Feature #2: Filter images
Why are we implementing this feature?
As a user, I want to be able to filter the images so that I can view only images that match a keyword.
What are we going to implement?
Given that a user clicks on the dropdown menu When the user selects one of the options Then only the images whose keyword matches the option should be displayed

How are we implementing it?
Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.
Feature #3: Style the application
Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in rows across the screen

How are we implementing it?
Style your application using floats.
Utilize at least one Google font.
Stretch Goal: Sort the images
Why are we implementing this feature?
As a user, I want to be able to sort the images so there is an order to how they render.
What are we going to implement?
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.
Submission Instructions
Complete your Feature Tasks for the day
Create a Pull Request (PR) back to the master branch of your repository
On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
A question within the context of today’s lab assignment
An observation about the lab assignment, or related ‘Ah-hah!’ moment
How long you spent working on this assignment