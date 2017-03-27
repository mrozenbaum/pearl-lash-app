"use strict";
console.log("inside AboutUsFactory");
// This will load about us page from about-us.json
app.factory("AboutUsFactory", function ($http, $q) {
  let getAboutPage = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/about-us.json")
      .then( (data) => {
        console.log("data from about US in AboutUsFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
  return {getAboutPage};
});