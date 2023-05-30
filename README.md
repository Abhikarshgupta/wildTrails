# wildTrails

Implements authentication using custom email, and google login. 
Lets a user to configure an itinerary as per their requirements. 

### Custom Email login :-
Validates and stores email id in local storage and navigates to dashboard on successful authentication. 

### Google login :-
Opens a consent screen for sign in, upon user interaction and login, we receive the id_token which stores all data about the user and can be passed to an authentication service in the backend to authenticate the user. Right now it is stored in local_storage as well. 
- Token can be copied from developer tools -> application tab -> local storage section -> `user-id-token` and parsed at https://jwt.io/ to validate.

### Pending Implementations :-
Haven't implemented the traveller + room selection popover due to paucity of time. Implementation:- 
-It will be a dialog component which will have a add more functionality along with a local state to maintain the counts etc. should be a reusable component. 

### Tech Stack Used:- 
- React
- Javascript
- Vite(bundler)
- Material UI (component Library)

### Steps to run the repo locally:- 

1. clone the repo 
2. run `npm install`
3. run `npm run dev`
4. in the terminal, you should see the port on which the application is running. navigate to the provided link to see it in action.
