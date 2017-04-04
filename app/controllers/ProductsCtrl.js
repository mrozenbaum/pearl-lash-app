"use strict";
console.log("inside ProductsCtrl");

app.controller("ProductsCtrl", function($scope, $window, $location, ProductsFactory, AuthFactory) {

  var user = AuthFactory.getUser();

  $scope.oneAtATime = true;

  $scope.productlist = [

          {
            name: "Classic Eyelash Extensions",
            image: "images/products/eyelash-extensions.jpg",
            description: "A simple way to a full clean face, iLashCare Oil Free Cleansing Wipes remove eye and face makeup quickly and easily while leaving the skin clean, hydrated and glowing. Easily removes the heaviest makeup and can be used to freshen your skin throughout the day. Great for neck and chest area also.",
            price: "$$$",
            id: "1"
          },
          {
            name: "Lash After Care",
            image: "images/products/lash-after-care.jpg",
            description: "For prepping lashes prior to applying eyelash extensions. Removes any makeup, oils or residue on lashes. Allows bonding to initiate quicker and lashes to stay on longer.",
            price: "$$$",
            id: "2"
          },
          {
            name: "Classic Eyelash Extensions Kit",
            image: "images/products/lash-training-kit.jpg",
            description: "The Lashfresh Eyelash Extension Tool Kit contains a Flexible Silicone Lash Brush and Lash Comb to style lashes, 4 disposable Pro Clean Brushes and 4 Cosmetic Qtips to deep clean in between lashes and along lash line, and a Lash Pik to easily separate lashes in a convenient go tube.",
            price: "$$$",
            id: "3"
          },
          {
            name: "Volume Eyelash Extensions Kit",
            image: "images/products/lash-training-kit.jpg",
            description: "Create beautifully curled lashes in under a minute without breaking lashes by using our iLashCare Heated Eyelash Curler. This innovative, all-in-one design allows you to separate and comb lashes while creating deep curls.",
            price: "$$$",
            id: "4"
          },
          {
            name: "Lower Lash Stretch Mascara",
            image: "images/products/lower-lash-stretch-mascara.jpg",
            description: "Lower Lash Stretch Mascara's exclusive elastic formula creates an eye opening look for lash extension wearers. Its oil-free conditioning formula wears all day without smudging. Specially engineered brush extends even the tiniest lower lashes.",
            price: "$$$", 
            id: "5"
          },
          {
            name: "Lash Food Eyeliner",
            image: "images/products/lash-food-eyeliner.jpg",
            description: "LashFood Conditioning Liquid Eyeliner, with Nano-Peptide Technology gives a precise, long lasting, quick drying, beautiful outlining effect to the eyes all while conditioning roots of lashes to transform frail and brittle lashes to become healthy and strong every morning.",
            price: "$$$",
            id: "6"
          },
          {
            name: "Lash Protein Remove Pads",
            image: "images/products/lash-protein-remove-pads.jpg",
            description: "For prepping lashes prior to applying eyelash extensions. Removes any makeup, oils or residue on lashes. Allows bonding to initiate quicker and lashes to stay on longer.",
            price: "$$$",
            id: "7"
          },
          {
            name: "Brow Extension Kit",
            image: "images/products/brow-extensions-kits.jpg",
            description: "Volume Up Coating Mascara formulated for eyelash extensions. Provides volume, length and intensity. Washes off easily. Black.",
            price: "$$$",
            id: "8"
          },
          {
            name: "Volume Eyelash Extensions",
            image: "images/products/eyelash-extensions.jpg",
            description: "LashFood Conditioning Liquid Eyeliner, with Nano-Peptide Technology gives a precise, long lasting, quick drying, beautiful outlining effect to the eyes all while conditioning roots of lashes to transform frail and brittle lashes to become healthy and strong every morning.",
            price: "$$$",
            id: "9"
          }
  ];


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




