# Diet planner
***
#### Author: Samuel Ferrara
#### Project Group XX

## Project Description
***
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A webb application where users can tailor a diet plan after their own personal taste, goals and approximated energy expenditure. 


### The Application
The user will be able to register an account 
by submitting account details (email and password) and personal information that the application uses to
approximate their total daily energy expenditure. The personal information which is needed includes 
current physical activity, height, weight, age and gender.

<p float="left">
  <img src="doc/screenshots/signup_page1.png" width="100" />
  <img src="doc/screenshots/signup_page2.png" width="100" /> 
  <img src="doc/screenshots/signup_page3.png" width="100" />
</p>

The user can update their personal information at any given time, 
every update will be stored together with their current diet plan so that the users progress can be tracked and visualized.
However, tracking and visualization of the users progress has not yet been implemented, more information on what is left to do
can be found under the [Left to do](#Left-to-do) section of this document.

The diet plan that is created by the user consist of meal categories that are given a name and a priority at creation, 
where the priority indicates in what order to consume the meals.
(e.g. Breakfast with priority 1, Midday snack with priority 2, Lunch with priority 3 etc).

When a category is created, meals can be composed and added by searching and adding ingredients to the  
category.

the users will be able to register an account on the website, 
view trailers, and set/remove favorite movies only if they have an account and are logged in. 
For more advanced interaction, we are planning to implement dynamic data visualization, 
for example an interactive graph where the user is able to see the connections between their favorite movies and find related/similar movies.
We have used Redux with ReactJS and Firebase for authorization and also as our database for storing the users favorite movies. We are using the api themoviedb for retrieving information about movies, genres, actors etc.

... General description and demo screenshots/videos from the application goes here ...
## The Application

### What the goal product offers


### What the product offers at this point

### Left to do


### Dependencies 
... list of dependencies here ...

### Application demo
... screenshots/videos from the application goes here ...

##### Live Demo: https://diet-planner-1.herokuapp.com
## Architecture
... information about how the model-view-presenter architecture was implemented goes here ...
***

## Installation & setup
***
... information about installation and setup goes here ...

***
## File Structure
### dietplanner/public
Contains all global and static files :
*  public/index.html
    * Contains the static HTML file and contains the following :
    * The title showed in the browser tab
    * ``` <div id="app-root"></div> ``` that is populated to show the main application.
    * ``` <div id="modal-root"></div> ``` that is populated to display modal components that go over the main application view
      

### dietplanner/src
Contains the application source code,
including all views, models, presenters, services, 
configuration and utilities.


#### src/model
Contains the application domain model

###### model/actions
* ***model/actions/actionsTypes.js***
  * constants js objects that defines the action types


*  ***model/actions/ingredient.js***
   * Action creators and action dispatchers responsible 
         for dispatching actions related to manipulation of
         the **currentIngredient** model.


*  ***model/actions/meal.js***
   * Action creators and action dispatchers responsible
          for dispatching actions related to manipulation of
          the **currentMeal** model.


* ***model/actions/mealCategory.js***
  * Action creators and action dispatchers responsible
         for dispatching actions related to manipulation of
         the **currentMealCategory** model.


   * ***model/actions/user.js***
       * Action creators and action dispatchers responsible
         for dispatching actions related to user authentication as well as
         manipulation of firebase resources including the **firebase** and **firstore** model.


###### model/reducer
 * ***model/reducer/ingredientReducer.js***
   * Contains redux reducer responsible for the **currentIngredient** model.


 * ***model/reducer/mealCategoryReducer.js***
   * Contains redux reducer responsible for the **currentMealCategory** model


* ***model/reducer/mealReducer.js***
   * Contains redux reducer responsible for the **currentMeal** model


* ***model/reducer/rootReducer.js***
   * Contains a combined reducer created from the applications reducers, also persist the above 
     reducers to local state *(might change this to be persisted in firestore instead)*
   * Includes **firestoreReducer** and **firebaseReducer** from the ***react-redux-firebase*** API, 
     these reducers are responsible for changes in everything that is persisted in firebase
     which includes user authentication and models like the **userProfile** and **mealPlan**.
     *(see more detailed information about the react-redux-firebase api under the [Dependencies](#Dependencies) section)*.


#### src/view
###### view/common
* Contains generic child components that are used in multiple views to reduce code complexity.

##### view/form
Contains all form views that are used in the application
* ***view/form/signup***
    * Contains view components that make up a multi step form to be filled by the user at registration.
    
* ***view/form/login.js***
    * Login form that renders a form to be filled by the user at login.
    
* ***view/form/createMealForm.js***
    * Form to be filled by the user when creating a new meal category, 
      wrapped in the **Modal** component that is rendered on top of the main view from ``<div id="modal-root"></div>`` in ***public/index.html***

##### view/navigation
Contains view components related to navigating through the application


##### view/style
Contain files related to styling of view components


##### view/user
Contains view components related to the user, such as the user profile and 
views regarding the meal plan.


... description of tle structure goes here ...


***