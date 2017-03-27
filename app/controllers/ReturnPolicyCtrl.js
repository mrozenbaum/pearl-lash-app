"use strict";
console.log("inside ReturnPolicyCtrl");
app.controller("ReturnPolicyCtrl", function($scope, $window, $location, ReturnPolicyFactory) {

  let printReturnPolicy = function(){
    ReturnPolicyFactory.getReturnPolicy()
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
});