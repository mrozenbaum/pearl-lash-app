"use strict";

// Our todo controller
app.controller("TodoCtrl", function($scope, $location){

  $scope.welcome = "hello";
  // if listview is true, show listview in html
  $scope.showListView = true;
  // Setting up an empty obj for new tasks
  $scope.newTask = {};

  $scope.newItem = function(){
    console.log("you clicked on new item", $location);
    // Location changes the URL
    $location.url("/items/new");
  };

  $scope.allItem = function(){
    console.log("you clicked on show all items");
    $location.url("/items/list");
  };


});