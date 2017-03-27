"use strict";
console.log("inside ProductsCtrl");

app.controller("ProductsCtrl", function($scope, $window, $location, ProductsFactory, AuthFactory) {

  var user = AuthFactory.getUser();

// Function to show products in online-store partial
  let printProductsList = function(){
    ProductsFactory.getProductsList()
    .then( (productslist) => {
      console.log("productslist.data.productslist", productslist.data.productslist);
      $scope.productslist = productslist.data.productslist;
    });
  };
  printProductsList();


// Function to save user product to user profile
  $scope.saveProduct = function (product){
    var userProduct = product;
    console.log("user product", userProduct);
    userProduct.uid = user;
    console.log("user product", userProduct);
    ProductsFactory.saveProductToFb(userProduct);
  };

  // Function to print out user saved products
  let getProductSaved = function(){
    ProductsFactory.getProductSaved(user)
    .then(function(productCollection){
      console.log("product collection:", productCollection);
      $scope.productsSaved = productCollection;
    });
  };
  getProductSaved();

  $scope.productDelete = function(productId){
    console.log("delete this product:", productId);
    ProductsFactory.deleteProduct(productId)
    .then(function(response) {
      ProductsFactory.getProductSaved(user).then(function(productCollection) {
        $scope.productsSaved = productCollection;
      });
    });
  };

// Function to print out 'product guarantee' in online-store partial
  let printProductsGuarantee = function(){
    ProductsFactory.getProductsGuarantee()
    .then( (products) => {
      console.log("products.data.products", products.data.products);
      $scope.products = products.data.products;
    });
  };



  printProductsGuarantee();



});




