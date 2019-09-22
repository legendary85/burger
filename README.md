# Welcome 2 Good Burger

SMU Trilogy Coding Bootcamp Summer 2019 Week 14: NodeJS | MySQL | Express | Handlebars| CRUD Functions

# Description

Welcome 2 Good Burger is a simple full-stack application with a front end implemented with HTML/CSS and elements from the Bootstrap framework and the backend implemented with Node.js and Express. HTML template was done with the help of Handlebars.

The user will enter any burger name to add it to the "Burgers 2 Eat!" menu. This also adds the new burger entry into MySQL database. A "Devour Me!" button is dynamically added with the burger name each time an entry is made. Once the "Devour Me" button is clicked, the specified burger is then removed frome the "Burgers 2 Eat!" menu and added to the "Devoured Burgers" menu. A "TRASH!" button is dynamically added eat time a burger is added . Anytime time the "TRASH!" button is clicked, the burger name associated button is removed.

## Packages installed

- epress
- express-handlebars
- mysql
- nodemon
-

## Functionality

Using an home-grown ORM, this app uses 4 basic CRUD functiond (http methods)

1. READ all entries from MySQL database and display them and display them to the DOM using handlebars.
2. UPDATE a selected burger by clicking "Devour ME!" , which will hit an express route thus changing the devoured status in MySQL database. Next, the burger name will be shown in the "Devoured Burgers" menu.
3. CREATE a new burger using the "Order" button after typing a burger name. This will hit an express route to insert a new burger into MySQL database. After added to database, the burger will display in the "Burgers 2 Eat! menu.
4. DELETE when the "TRASH!" button is clicked. This hits an exprees route removing the burger from MySQL database.

## Demo

The demo of "Welcome 2 Good Burger" can be found here.

## Screenshots

- Desktop View
- Mobile View

### Developer

Kourtney McCullough
