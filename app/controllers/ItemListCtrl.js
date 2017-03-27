"use strict";
// this is for user profile page
app.controller("ItemListCtrl", function($scope, ItemStorage, AuthFactory){

  // $scope.searchText = SearchTermData;

  let user = AuthFactory.getUser();
  
  let getItems = function(){
  ItemStorage.getItemList(user)
  .then(function(itemCollection){
    $scope.items = itemCollection;
  });
    
  };
  getItems();
  // function that goes to item storage, gets the item list, and adds it to the item collection


  // Function for deleting items
  $scope.itemDelete = function(itemId){
    console.log("delete this item", itemId);
    ItemStorage.deleteItem(itemId)
    .then(function(response){
      ItemStorage.getItemList(user).then(function(itemCollection){
        $scope.items = itemCollection;
      });
    });
    
  };

});