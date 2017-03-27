"use strict";
console.log("inside AuthFactory");
app.factory("AuthFactory", function() {

  // creating user
  let currentUser = null;
  
  let createUser = function(userObj){
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch( function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error inside createUser func in Authfactory:", errorCode, errorMessage);
    });
  };
  // login
  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch( function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error inside loginUser func in Authfactory:", errorCode, errorMessage);
    });
  };
  // logout
  let logoutUser = function() {
    console.log("logoutUser");
    return firebase.auth().signOut();
  };
  // user is authenticated
  let isAuthenticated = function() {
    console.log("Authfactory: is Authenticated");
    return new Promise( (resolve, reject) => {
      firebase.auth().onAuthStateChanged( (user) => {
        if (user){
          currentUser = user.uid;
          console.log("user", currentUser);
          resolve(true);
        } else{
          resolve(false);
        }
      });  
    });
  };

  let getUser = function() {
    return currentUser;
  };
  
  let provider = new firebase.auth.GoogleAuthProvider();

  let authWithProvider = function() {
    return firebase.auth().signInWithPopup(provider);
  };


  return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};


});



