"use strict";

// This page will include:
// login for user
// logout for user
// register user
// login google

app.controller("UserCtrl", function($scope, $window, AuthFactory, $location) {

  $scope.account = {
    email: "",
    password:""
  };
    // Function for user to logout
    let logout = () => {
      console.log("logout clicked");
      AuthFactory.logoutUser()
      .then( function (data) {
        console.log("logged out?", data);
        $window.location.url = "#/user-profile"; // TAKE USER TO 'HOME/MAIN PG'
      }, function (error) {
        console.log("error occured on logout");
      });
    };
    // Function for user to register
    $scope.register = () => {
      console.log("you clicked register");
      AuthFactory.createUser ({
        email: $scope.account.email,
        password: $scope.account.password
      })
      .then( (userData) => {
        console.log("UserCtrl newUser:", userData);
        $scope.login();
      }, (error) => {
        console.log("Error creating user:", error);
      });
    };
    // Function for user to login
    $scope.login = () => {
      console.log("you clicked login");
      AuthFactory.loginUser($scope.account)
      .then( () => {
        $window.location.href = "#!/user-profile"; 
      });
    };

    $scope.loginGoogle = () => {
      console.log("you clicked login with GOOGLE");
      AuthFactory.authWithProvider()
      .then( function (result) {
        var user = result.user.uid;
        console.log("logged in google user:", user);
        // Once logged in, show user profile page
        $location.path("/user-profile");
        $scope.$apply(); // WHAT IS THIS CONNECTED TO?
      }).catch( function (error) {
        console.log("error with google login", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
    };

});








