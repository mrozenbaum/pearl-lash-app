"use strict";
console.log("inside ProductsFactory");
// Function to get 'product guarantee' from local json file
app.factory("ProductsFactory", function ($http, $q, FBCreds, AuthFactory) {
  
    let user = AuthFactory.getUser();
  

// Function to get products from local json file
  let getProductsList = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/products.json")
      .then( (data) => {
        console.log("data from products in ProductsFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

// Function to save user selected product to FB
    let saveProductToFb = function(productToSave) {
    return $q( (resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/productsSaved.json`,
        angular.toJson(productToSave))
        .then( (data) => {
        // console.log("data from products in ProductsListFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  // Function to get saved user product from FB
  let getProductSaved = (user) => {
    console.log("this should fire!!");
    // Empty array to hold user saved products from FB
    let productsSaved = [];
    return $q( (resolve, reject) => {
      console.log("user saved products:", `${FBCreds.databaseURL}/productsSaved.json?orderBy="uid"&equalTo="${user}"`);
      // Getting user products from FB with user uid
      $http.get(`${FBCreds.databaseURL}/productsSaved.json?orderBy="uid"&equalTo="${user}"`)
      .then( (productObject) => {
        let productCollection = productObject.data;
        console.log("product collection:", productCollection);
        Object.keys(productCollection).forEach( (key) => {
          productCollection[key].id = key;
          productsSaved.push(productCollection[key]);
        });
        resolve(productsSaved);
          console.log("product saved:", productsSaved);
        })
        .catch( (error) => {
          reject(error);
        });
    });
  };

  let deleteProduct = (productId) => {
    console.log("delete product in factory:", productId);
    return $q( (resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/productsSaved/${productId}.json`)
      .then( (productObject) => {
        resolve(productObject);
      });
    });
  };

  let getProductsGuarantee = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/products-guarantee.json")
      .then( (data) => {
        console.log("data from products in ProductsFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };





  return {getProductsGuarantee, getProductsList, saveProductToFb, getProductSaved, deleteProduct};
});








