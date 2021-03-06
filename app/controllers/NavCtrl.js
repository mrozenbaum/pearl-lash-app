"use strict";
console.log("inside NavCtrl");
// Ctrl for navigation links
app.controller("NavCtrl", function ($scope, $window, SearchTermData) {

  $scope.searchText = SearchTermData;
  $scope.isLoggedIn = false;
  // Authenticate user
  // add a listener for login/logout to show/hide nav items
  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", $scope.isLoggedIn);

    } else {
      $scope.isLoggedIn = false;
      console.log("cuurentUser logged in", $scope.isLoggedIn);
      // $window.location forces the page to completely reload
      $window.location.href = "#!/home-page";
    }
    
  });
});