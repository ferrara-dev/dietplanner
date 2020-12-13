# Diet planner
***
#### Author: Samuel Ferrara
#### Project Group XX

## Project Description
***
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
... General description and demo screenshots/videos from the application goes here ...

# Dependencies 
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
> Contains all global and static files :
> *  public/index.html
>    * Contains the static HTML file and contains the following :
>       * The title showed in the browser tab
>       * ``` <div id="app-root"></div> ``` that is populated to show the main application.
>       * ``` <div id="modal-root"></div> ``` that is populated to display modal components that go over the main application view
      

### dietplanner/src
> Contains the application source code,
including all views, models, presenters, services, 
configuration and utilities.


#### src/model
Contains the application domain model
 
**model/actions**
>   * ***model/actions/actionsTypes.js***
>       * constants js objects that defines the action types


>   *  ***model/actions/ingredient.js***
>       * Action creators and action dispatchers responsible 
>         for dispatching actions related to manipulation of
>         the **currentIngredient** model.

>   *  ***model/actions/meal.js***
>        * Action creators and action dispatchers responsible
>          for dispatching actions related to manipulation of
>          the **currentMeal** model.

>   * ***model/actions/mealCategory.js***
>       * Action creators and action dispatchers responsible
>         for dispatching actions related to manipulation of
>         the **currentMealCategory** model.

>   * ***model/actions/user.js***
>       * Action creators and action dispatchers responsible
>         for dispatching actions related to user authentication as well as
>         manipulation of firebase resources including the **firebase** and **firstore** model.

**model/reducer**
> * ***model/reducer/ingredientReducer.js***
>   * Contains redux reducer responsible for the **currentIngredient** model.

> * ***model/reducer/mealCategoryReducer.js***
>   * Contains redux reducer responsible for the **currentMealCategory** model


> * ***model/reducer/mealReducer.js***
>   * Contains redux reducer responsible for the **currentMeal** model


> * ***model/reducer/rootReducer.js***
>   * Contains a combined reducer created from the applications reducers, also persist the above 
>     reducers to local state *(might change this to be persisted in firestore instead)*
>   * Includes **firestoreReducer** and **firebaseReducer** from the ***react-redux-firebase*** API, 
>     these reducers are responsible for changes in everything that is persisted in firebase
>     which includes user authentication and models like the **userProfile** and **mealPlan**.
>     *(see more detailed information about the api under the [Dependencies](#Dependencies) section)*.


... description of tle structure goes here ...


***