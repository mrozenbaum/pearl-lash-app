"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemStorage){
  $scope.title = "Edit Profile";
  $scope.btnText = "Submit";

  $scope.newTask = {};
  $scope.firstName = {};
  $scope.lastName = {};
  $scope.birthday = {};
  $scope.profession = {};
  $scope.education = {};
  $scope.address = {};
  $scope.zipCode = {};
  $scope.phone = {};

  ItemStorage.getSingleItem($routeParams.itemId)
  .then(function successCallback(response){
     console.log("getSingleItemresponse", response);
      $scope.newTask = response;
  });
    
  $scope.addNewItem = function(){
    ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
    .then(function successCallback(response) {
      console.log(response);
      $location.url("/items/list");
    });
  };
});