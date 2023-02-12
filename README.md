<h1>Compass-Desafio01</h1>
<p>This is the first challenge offered by Compass to test the NodeJS development intership's members. It is a planner that users can create, read and delete events,
and also sign up and sign in. This application is developed with NodeJS, Javascript and Typescript.</p>

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
    <li>Create event</li>
    <li>Delete event</li>
    <li>Delete event from day of the week</li>
    <li>Get events</li>
    <li>Get event</li>
    <li>Get event from day of the week</li>
    <li>Sign Up</li>
    <li>Sign In</li>
   </ul>
</h4>

<p>

<h3>Create event:</h3>
  <p>Route: localhost:3000/api/v1/events</p>
  To create an event you need to send a request to the route above. The request body needs to contain the following
  fields: description, dateTime, createdAt. All of them need to be of type string. Here is an example:</br>
  { </br>
    "description": "Arctic Monkeys Show", </br>
    "dateTime": "2023-02-10T13:52:31.775Z", </br>
    "createdAt": "2023-02-10T13:52:31.775Z" </br>
  } </br></br>

  This request will be validated by a middleware (validateEventRegistration), and if it is not valid, then an error 
  message will be sent back as response. On the other hand, if the request is valid, it will be sent to the 
  controller (CreateEventRegistrationController) that will get the values passed and send them to the 
  event's repository (EventRegistrationRepositoryInMemory). In the repository, an instance of the class 
  EventRegistration is created and the values received from the controller are set to it, then the instance is 
  pushed into an array. In the end, the instance created is returned to the controller, that will return it as 
  response. If an error occurs during this process, an error message will be sent back warning that was not 
  possible to create the event.
</p>
<p>
  <h3>Delete event</h3>
  <p>Route: localhost:3000/api/v1/event/:id</p>
  To delete an event you need to send a request to the route above. The request route must contain the id of the 
  event that you want to delete. It needs to be provided as a route param. The id needs to be a string and an uuid 
  (universally unique identifier). Here is an example:</br>
  localhost:3000/api/v1/event/e0720442-70b1-4c28-bf47-685d2e30cb97</br></br>

  This request will be validated by a middleware (validateId), and if it is not valid or if it does not belong to an
  event, then an error message will be sent back as response. On the other hand, if it is valid, the id will be sent 
  to the controller (DeleEventRegistrationController) that will get it and send it to the event's repository 
  (EventRegistrationRepositoryInMemory). In the repository, the event to which the id belongs will be deleted. 
  The repository does not have a return, but the controller return a message as response, saying the event was 
  deleted. If an error occurs during this process, an error message will be sent back warning that was not possible 
  to delete the event.
</p>
<p>
  <h3>Delete event by day of the week</h3>
  <p>Route: localhost:3000/api/v1/events?dayOfTheWeek</p>
  To delete an event by day of the week you need to send a request to the route above. The request route must contain
  the day of the week that you want to delete the event from. It needs to be provided as a query param. The day of 
  the week needs to be a string (Sunday, Monday, Tuesday, Wednesday, Friday, Saturday). Here is an example:</br>
  localhost:3000/api/v1/events?dayOfTheWeek=Friday</br></br>

  This request will be validated by a middleware (validateDayOfTheWeek), and if the day is not valid or there is 
  no event that belongs to that day, then an error message will be sent back as response. On the other hand, if 
  the day is valid, it will be sent to the controller (DeleteEventByDayOfTheWeekController) that will get it and 
  send it to the event's repository (EventRegistrationRepositoryInMemory. In the repository, all the events that 
  belong to that day will be sent to the controller, that will return them as response. If an error occurs during 
  this process, an error message will be sent back warning that was not possible to delete the events.
</p>
<p>
  <h3>Get events</h3>
  <p>Route: localhost:3000/api/v1/events</p>
  To get the list of events, you need to send a request to the route above. This request does not need a body or 
  params. It will be sent to the controller (GetAllEventsController), that will get the events from the
  event's repository (EventRegistrationRepositoryInMemory) and return them as response. If there are no events,
  a message is sent warning that no events were found. Moreover, if an error occurs during 
  this process, an error message will be sent back warning that was not possible to get the events.
</p>
<p>
  <h3>Get event</h3>
  <p>Route: localhost:3000/api/v1/events/:id</p>
  To get an event you need to send a request to the route above. The request route must contain the id of the 
  event that you want to get. It needs to be provided as a route param. The id needs to be a string and an uuid 
  (universally unique identifier). Here is an example:</br>
  localhost:3000/api/v1/events/e0720442-70b1-4c28-bf47-685d2e30cb97</br></br>

  This request will be validated by a middleware (validateId), and if it is not valid or if it does not belong to an
  event, then an error message will be sent back as response. On the other hand, if it is valid, the id will be sent 
  to the controller (GetEventRegistrationController) that will get it and send it to the event's repository 
  (EventRegistrationRepositoryInMemory). In the repository, the event to which the id belongs will be returned 
  to the controller, that will return it as reponse. If an error occurs during this process, an error message 
  will be sent back warning that was not possible to get the event.
</p>
<p>
  <h3>Get event by day of the week</h3>
  <p>Route: localhost:3000/api/v1/events?dayOfTheWeek</p>
  To get an event by day of the week, you need to send a request to the route above. The request route must contain
  the day of the week that you want to get the event from. It needs to be provided as a query param. The day of 
  the week needs to be a string (Sunday, Monday, Tuesday, Wednesday, Friday, Saturday). Here is an example:</br>
  localhost:3000/api/v1/events?dayOfTheWeek=Friday</br></br>

  This request will be validated by a middleware (validateDayOfTheWeek), and if the day is not valid or there is 
  no event that belongs to that day, then an error message will be sent back as response. On the other hand, if 
  the day is valid, it will be sent to the controller (GetEventRegistrationByDayOfTheWeekController) that will get it and 
  send it to the event's repository (EventRegistrationRepositoryInMemory. In the repository, all the events that 
  belong to that day will be sent to the controller, that will return them as response. If an error occurs during 
  this process, an error message will be sent back warning that was not possible to get the events.
</p>
<p>
  <h3>Sign Up</h3>
  <p>Route: localhost:3000/api/v1/users/signUp</p>
  To sign up, you need to a reques to the route above. The request must contain the following fields: firstName,
  lastName, birthDate, city, country, email, password, confirmPassword. They have to be of type string. Here is an 
  example:</br>
  { </br>
    "firstName": "Dener" </br> 
    "lastName":"Oliveira" </br> 
    "birthDate": "2023-01-01" </br>
    "city": "Golden City" </br>
    "country": "Brazil" </br> 
    "email": "dener@gmail.com" </br>
    "password": "12345" </br> 
    "confirmPassword": "12345" </br>
  } </br></br>

  This request will be validated by a middleware (validateSignUpRequest), and if the request is not valid, an error message
  will be sent back as response. On the other hand, if the request is valid, it will be sent to the controller 
  (SignUpController), that will get the values from the request and send them to the user's repository 
  (UserRepositoryInMemory). In the repository, an instance of the class User is created and the values received 
  from the controller are set to it, then the instance is pushed into an array. In the end, the instance created 
  is returned to the controller, that will return it as response. If an error occurs during this process, an error 
  message will be sent back warning that was not possible to sign up.
</p>

<p>
  <h3>Sign In</h3>
  <p>Route: localhost:3000/api/v1/users/signIn</p>
  To sign in, you need to send a request to the route above. The request must contain the following fields: email and
  password. They need to be of type string. Here is an example:</br>
  {</br>
    "email": "dener@gmail.com", </br>
    "password": "12345" </br>
  }</br></br>

  This request will be verified by a middleware (validateSignInRequest), and if the request is not valid, an error
  message will be sent back as response. On the other hand, if the request is valid, it will be sent to the controller
  (SignInController), that will get the values and make a search on the user's repository (UserRepositoryInMemory).
  If no user with the email provided was found, an error message will be sent back warning that the user was not found.
  If an user was found, but the password does not match, an error message will be sent back warning that email or
  password does not match. However, if the password matches, then the controller will return a message saying that
  the user is signed in. If an error occurs during this process, an error message will be sent back warning that 
  was not possible to sign in.
</p>

