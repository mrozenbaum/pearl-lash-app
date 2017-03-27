"use strict";

console.log("inside PearlLashPolicyFactory");
// Works with privacy policy and return policy from local jsons
app.factory("PearlLashPolicyFactory", function ($http, $q) {
  
  let getReturnPolicy = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/return-policy.json")
      .then( (data) => {
        console.log("data from return policy in PearlLashPolicyFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
  


    let getPrivacyPolicy = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/privacy-policy.json")
      .then( (data) => {
        console.log("data from privacy policy in PearlLashPolicyFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };




  return {getReturnPolicy, getPrivacyPolicy};



});