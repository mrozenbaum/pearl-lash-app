"use strict";
console.log("inside AboutUsCtrl");
// This will control what goes on our about us page
app.controller("AboutUsCtrl", function($scope, $window, $location, AboutUsFactory) {

  let printAboutPage = function(){
    AboutUsFactory.getAboutPage()
    .then( (about) => {
      console.log("about inside AboutUsCtrl:", about.data.about);
      var aboutData = about.data.about;
      for( var i = 0; i < aboutData.length; i++){
        console.log("about data:", aboutData[i]);
        $scope.about = aboutData;
      }
    });
  };
    printAboutPage();
});