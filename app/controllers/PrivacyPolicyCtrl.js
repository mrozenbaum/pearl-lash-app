"use strict";
console.log("inside PrivacyPolicyCtrl");
app.controller("PrivacyPolicyCtrl", function($scope, $window, $location, PrivacyPolicyFactory) {

  let printPrivacyPolicy = function(){
    PrivacyPolicyFactory.getPrivacyPolicy()
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
