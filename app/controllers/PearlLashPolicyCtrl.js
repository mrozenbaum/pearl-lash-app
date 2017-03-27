"use strict";

console.log("inside PearlLashPolicyCtrl");
// Works with privacy policy and return policy from local jsons
app.controller("PearlLashPolicyCtrl", function($scope, $window, $location, PearlLashPolicyFactory) {

  let printReturnPolicy = function(){
    PearlLashPolicyFactory.getReturnPolicy()
    .then( (returns) => {
      console.log("returns--data--returns", returns.data.returns);
      var returnPolicy = returns.data.returns;
      for (var i = 0; i < returnPolicy.length; i++) {
        console.log("return policy list in controller:", returnPolicy[i]);
      $scope.returns = returnPolicy;
      }
    });
  };
  printReturnPolicy();


    let printPrivacyPolicy = function(){
    PearlLashPolicyFactory.getPrivacyPolicy()
    .then( (privacy) => {
      console.log("privacy--data--privacy", privacy.data.privacy);
      var privacyData = privacy.data.privacy;
      
      // var privacyPolicyList = privacy.data.privacy;
      for (var i = 0; i < privacyData.length; i++) {
        console.log("privacy data:", privacyData[i]);
      }
      $scope.privacy = privacyData;
    });
  };
  printPrivacyPolicy();


});