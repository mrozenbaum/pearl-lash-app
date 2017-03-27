"use strict";
console.log("inside PrivacyPolicyFactory");
// This will load about us page from about-us.json
app.factory("PrivacyPolicyFactory", function ($http, $q) {
  let getPrivacyPolicy = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/privacy-policy.json")
      .then( (data) => {
        // console.log("data from privacy policy in PrivacyPolicyFactory:", data);
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
  return {getPrivacyPolicy};
});