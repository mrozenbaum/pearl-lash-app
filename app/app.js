"use strict";

var app = angular.module("PearlLashApp", ["ngRoute"]);

  //used to authenticate user when navigating to other views
  let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
    console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
      console.log("userExists", userExists);
      if (userExists){
        console.log("Authenticated, go ahead.");
        resolve();
      } 

      // else {
      //   console.log("Authentication rejected, go away.");
      //   reject();
      // }

    });

});

app.config( function ($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "partials/home-page.html",
    controller: "HomePageCtrl"
  }).
  when("/home-page", {
    templateUrl: "partials/home-page.html",
    controller: "HomePageCtrl"
  }).
    when("/user-profile", {
    templateUrl: "partials/user-profile.html",
    controller: "UserCtrl",
    resolve:{isAuth}
  }).
    when("/login", {
    templateUrl: "partials/login.html",
    controller: "UserCtrl"
  }).
    when("/logout", {
    templateUrl: "partials/home-page.html",
    controller: "HomePageCtrl"
  }).
    when("/contact-us", { 
    templateUrl: "partials/contact-us.html",
    controller: "ContactUsCtrl"
  }).
    when("/courses", {
    templateUrl: "partials/courses.html",
    controller: "CoursesCtrl",
    resolve:{isAuth}
  }).
    when('/courses', {
      templateUrl: 'partials/courses.html',
      controller: 'CoursesCtrl',
      resolve:{isAuth}
    }).
    when("/user-saved-course", {
    templateUrl: "partials/user-saved-course.html",
    controller: "CoursesCtrl",
    resolve:{isAuth}
  }).
    when("/about-us", {
    templateUrl: "partials/about-us.html",
    controller: "AboutUsCtrl"
  }).
    when("/online-store", {
    templateUrl: "partials/online-store.html",
    controller: "ProductsCtrl",
    resolve:{isAuth}
  }).
    when("/online-store", {
    templateUrl: "partials/online-store.html",
    controller: "ProductsCtrl",
    resolve:{isAuth}
  }).
     when('/user-saved-product', {
      templateUrl: 'partials/user-saved-product.html',
      controller: 'ProductsCtrl',
      resolve: {isAuth}
    }).
    when('/items/list',{
    templateUrl: "partials/item-list.html",
    controller: 'ItemListCtrl',
    resolve: {isAuth}
  }).
  when('/items/new', { // edit ur profile/ Tell about form
    templateUrl: "partials/item-form.html",
    controller: 'ItemNewCtrl',
    resolve: {isAuth}
  }).
  when('/items', {
    templateUrl: "partials/item-details.html",
    controller: 'ItemViewCtrl',
    resolve: {isAuth}
  }).
  when('/items/edit', {
    templateUrl: 'partials/item-form.html',
    controller: 'ItemEditCtrl',
    resolve: {isAuth}
  }).
   when('/login-details', {
      templateUrl: 'partials/user-details.html',
      controller: 'UserDetailsCtrl',
      resolve: {isAuth}
    }).
    when('/privacy-policy', {
      templateUrl: 'partials/privacy-policy.html',
      controller: 'PrivacyPolicyCtrl',
    }).
    when('/return-policy', {
      templateUrl: 'partials/return-policy.html',
      controller: 'ReturnPolicyCtrl',
    }).
    otherwise("/");  
});



// Runs when the application loads
app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
  };

  firebase.initializeApp(authConfig);

});

