"use strict";
console.log("inside CoursesCtrl");
// This will print out our courses information
app.controller("CoursesCtrl", function($scope, $window, $location, CoursesFactory, AuthFactory) {

  var user = AuthFactory.getUser();

// This will print out our courses page summary 
  let printCoursesSummary = function() {
      CoursesFactory.getCoursesSummary()
      .then( (summary) => {
          console.log("summary.data.summary", summary.data.summary);  
          $scope.summary = summary.data.summary;
      });
  };
  printCoursesSummary();
// Function to print courses from local json file
  let printCourses = function() {
      CoursesFactory.getCourses()
      .then( (courses) => {
          // console.log("courses.data.courses", courses.data.courses);  
          $scope.courses = courses.data.courses;
      });
  };
  printCourses();
  // Function to save courses to user profile
  $scope.saveCourse = function (course){
    var userCourse = course;
    console.log("user course:", userCourse);
    userCourse.uid = user;
    console.log("user course:", userCourse);
    CoursesFactory.saveCourseToFb(userCourse);
  };

  let getCourseSaved = function(){
    CoursesFactory.getCourseSaved(user)
    .then(function(courseCollection){
      console.log("course collection:", courseCollection);
      $scope.coursesSaved = courseCollection;
    });
  };
  getCourseSaved();

  $scope.courseDelete = function(coursesSavedId) {
    console.log("delete this item", coursesSavedId);
    CoursesFactory.deleteCourse(coursesSavedId)
    .then( function(response) {
      CoursesFactory.getCourseSaved(user).then( function ( coursesCollection) {
        $scope.coursesSaved = coursesCollection;
      });

    });
  };




});
      