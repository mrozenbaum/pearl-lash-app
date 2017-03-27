"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location, AuthFactory){
  
  let user = AuthFactory.getUser();
  $scope.title ="Edit your profile:";
  $scope.btnText = "Update"; 

  $scope.newTask = {
    firstName: "",
    lastName: "",
    birthday: "",
    profession: "",
    education: "",
    address: "",
    zipCode: "",
    phone:"",
    uid: user
  };

  // function for adding new item to new task
  $scope.addNewItem = function(){
    console.log("add new item");
    // created obj up on page, now using it here
    ItemStorage.postNewItem($scope.newTask)
    .then(function(response){
      $location.url("/items/list");
    });
    console.log("you added a new item", $scope.newTask);
    $scope.newTask = {};

  };

});