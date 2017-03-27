"use strict";
console.log("inside ReturnPolicyFactory");
// This will load about us page from about-us.json
app.factory("ReturnPolicyFactory", function ($http, $q) {
  let getReturnPolicy = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/return-policy.json")
      .then( (data) => {
        console.log("data from return policy in ReturnPolicyFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
  return {getReturnPolicy};
});