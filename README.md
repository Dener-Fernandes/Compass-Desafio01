<h1>Compass-Desafio01</h1>
<p>This is the first challenge offered by Compass to test the NodeJS development intership's members. It is a planner that users can create, read and delete events,
and also sign up and sign in. This application is developed with NodeJS, Javascript and Typescript.</p>

<h3>Production mode</h3>
<p>URL to application in production mode: https://compass-desafio01-production.up.railway.app/</p>
<p>It is possible to test this application in production mode. You need to use the URL above, but the paths to send requests are the same of development mode.
Follow the steps bellow to test it, but use the production URL.
</p>

<h3>Requirements</h3>
<p>To run this project in you computer you need to have installed NodeJS, npm, some IDE and Postman. You may need
  Git to clone the project, however you can download it as a zip archive.
</p>

<h3>Getting started</h3>
  <ol>
    <li>Clone this repository in your computer using Git or download the zip archive and unpac it</li>
    <li>In the root of the project, you can use powershell or the terminal of your IDE to install the dependenceis
      through the command npm install/npm i
    </li>
    <li>In powershell use the command npm start to run the project</li>
    <li>To make requests, open Postman and select the option Collections. There you can create a folder and inside
      it you add the requests, which for this project they are GET, POST and DELETE. As you are running the project 
      locally in your computer, you can use the domain localhost, the base route and all the specific routes to make 
      requests and test the project. It is all described in the section features
    </li>
  </ol>

<h3>Features<h3>

<h4>
  <ul>
    <li><a href="#createEvent">Create event</a></li>
    <li><a href="#deleteEvent">Delete event</a></li>
    <li><a href="#deleteEventByDayOfTheWeek">Delete event by day of the week</a></li>
    <li><a href="#getEvent">Get event</a></li>
    <li><a href="#getEvents">Get events</a></li>
    <li><a href="#getEventByDayOfTheWeek">Get event by day of the week</a></li>
    <li><a href="#signUp">Sign up</a></li>
    <li><a href="#signIn">Sign in</a></li>
   </ul>
</h4>

<p id="createEvent">
  <h3>Create event:</h3>
  <p>Route type: POST</p>
  <p>Route: localhost:3000/api/v1/events</p>
  To create an event you need to send a request to the route above. The request body needs to contain the following
  fields: description, dateTime, createdAt. All of them need to be of type string. Here is an example:</br>
  { </br>
    "description": "Arctic Monkeys Show", </br>
    "dateTime": "2023-02-10T13:52:31.775Z", </br>
    "createdAt": "2023-02-10T13:52:31.775Z" </br>
  } </br>
</p>

<p id="deleteEvent">
  <h3>Delete event</h3>
  <p>Route type: DELETE</p>
  <p>Route: localhost:3000/api/v1/event/:id</p>
  To delete an event you need to send a request to the route above. The request route must contain the id of the 
  event that you want to delete. It needs to be provided as a route param. The id needs to be a string and an uuid 
  (universally unique identifier). Here is an example:</br>
  localhost:3000/api/v1/event/e0720442-70b1-4c28-bf47-685d2e30cb97</br>
</p>

<p id="deleteEventByDayOfTheWeek">
  <h3>Delete event by day of the week</h3>
  <p>Route type: DELETE</p>
  <p>Route: localhost:3000/api/v1/events?dayOfTheWeek</p>
  To delete an event by day of the week you need to send a request to the route above. The request route must contain
  the day of the week that you want to delete the event from. It needs to be provided as a query param. The day of 
  the week needs to be a string (Sunday, Monday, Tuesday, Wednesday, Friday, Saturday). Here is an example:</br>
  localhost:3000/api/v1/events?dayOfTheWeek=Friday</br>
</p>

<p id="getEvent">
  <h3>Get event</h3>
  <p>Route type: GET</p>
  <p>Route: localhost:3000/api/v1/events/:id</p>
  To get an event you need to send a request to the route above. The request route must contain the id of the 
  event that you want to get. It needs to be provided as a route param. The id needs to be a string and an uuid 
  (universally unique identifier). Here is an example:</br>
  localhost:3000/api/v1/events/e0720442-70b1-4c28-bf47-685d2e30cb97</br>
</p>

<p id="getEvents">
  <h3>Get events</h3>
  <p>Route type: GET</p>
  <p>Route: localhost:3000/api/v1/events</p>
  To get the list of events, you need to send a request to the route above. This request does not need a body or 
  params.
</p>

<p id="getEventByDayOfTheWeek">
  <h3>Get event by day of the week</h3>
  <p>Route type: GET</p>
  <p>Route: localhost:3000/api/v1/events?dayOfTheWeek</p>
  To get an event by day of the week, you need to send a request to the route above. The request route must contain
  the day of the week that you want to get the event from. It needs to be provided as a query param. The day of 
  the week needs to be a string (Sunday, Monday, Tuesday, Wednesday, Friday, Saturday). Here is an example:</br>
  localhost:3000/api/v1/events?dayOfTheWeek=Friday</br>
</p>

<p id="signUp">
  <h3>Sign Up</h3>
  <p>Route type: POST</p>
  <p>Route: localhost:3000/api/v1/users/signUp</p>
  To sign up, you need to send a request to the route above. The request must contain the following fields: firstName,
  lastName, birthDate, city, country, email, password, confirmPassword. They have to be of type string. Here is an 
  example:</br>
  { </br>
    "firstName": "Dener", </br> 
    "lastName":"Oliveira", </br> 
    "birthDate": "2023-01-01", </br>
    "city": "Golden City", </br>
    "country": "Brazil", </br> 
    "email": "dener@gmail.com", </br>
    "password": "12345", </br> 
    "confirmPassword": "12345" </br>
  } </br>
</p>

<p id="signIn">
  <h3>Sign In</h3>
  <p>Route type: POST</p>
  <p>Route: localhost:3000/api/v1/users/signIn</p>
  To sign in, you need to send a request to the route above. The request must contain the following fields: email and
  password. They need to be of type string. Here is an example:</br>
  {</br>
    "email": "dener@gmail.com", </br>
    "password": "12345" </br>
  }</br>
</p>
