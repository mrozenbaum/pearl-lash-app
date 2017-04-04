
"use strict";
console.log("inside CoursesCtrl");
// This will print out our courses information
app.controller("CoursesCtrl", function($scope, $window, $location, CoursesFactory, AuthFactory) {

  var user = AuthFactory.getUser();
  $scope.oneAtATime = true;

  $scope.courses = [

          {
            name: "Safety in eyelash extension practices",
            image: "images/course-image1.jpg",
            description: "Welcome to the exciting world of Eyelash Extensions. This course will cover all aspects of eye skin care and anatomy, safety, and sanitation in eyelash extension procedures.",
            price: "$$$",
            note: "Participants must be licensed or currently enrolled in beauty school.",
            id: "1"
          },
          {
            name: "Basic classic eyelash extension techniques with hands-on workshop",
            image: "images/course-image2.jpg",
            description: "Ready to take the next step in your career? This course will teach safety, sanitation, shaping techniques, maintenance, removal and application of one to two strands of extension at a time to the natural lash.",
            price: "$$$",
            note: "Participants must be licensed or currently enrolled in beauty school.",
            id: "2"
          },
          {
            name: "Volume eyelash extension techniques with hands-on workshop",
            image: "images/course-image3.jpg",
            description: "Indulge your hunger for knowledge with this very important course. It will cover safety, sanitation, shaping techniques, maintenance, removal and application of three to four strands of extension on one natural lash.",
            price: "$$$",
            note: "Participants must be licensed or currently enrolled in beauty school.",
            id: "3"
          },
          {
            name: "Intense volume eyelash extension techniques with hands-on workshop",
            image: "images/course-image1.jpg",
            description: "For the more experienced artist looking for a step on the competition, this course is for you. It is the most intense course that will teach preparation, maintenance of natural lashes,  proper application of five to eight extensions on one natural lash and removal process.",
            price: "$$$",
            note: "Participants must be licensed and have more than one year of hands-on experience in volume extensions.",
            id: "4"
          },
          {
            name: "Eyelash perming techniques with hands-on workshop",
            image: "images/course-image2.jpg",
            description: "This change of pace class will introduce and provide education on safety, sanitation, maintenance, shaping and styling techniques, procedures to perform an eyelash perm.",
            price: "$$$", 
            note: "Participants must be licensed or enrolled in beauty school.",
            id: "5"
          },
          {
            name: "Latest industry tips and tricks with optional hands-on workshop",
            image: "images/course-image3.jpg",
            description: "Already a pro, looking to sharpen up your skill and learn about the latest industry trends to stay ahead, this class which includes theory, demonstration, product knowledge of latest products and techniques on a world market will do the trick.",
            price: "$$$",
            note: "Participants must be licensed and have Lash Certificates.",
            id: "6"
          },
          {
            name: "Eyebrow artistry with optional hands-on workshop",
            image: "images/course-image1.jpg",
            description: "For the creative souls we also offer an in-depth course covering all aspects of eyebrow shaping procedures, waxing techniques and tinting.",
            price: "$$$",
            note: "Participants must be licensed and have Lash Certificates.",
            id: "7"
          },
          {
            name: "Eyebrow artistry with optional hands-on workshop",
            image: "images/course-image2.jpg",
            description: "For the creative souls we also offer an in-depth course covering all aspects of eyebrow shaping procedures, waxing techniques and tinting.",
            price: "$$$",
            note: "Participants must be licensed and have Lash Certificates.",
            id: "8"
          },
          {
            name: "World class customer service",
            image: "images/course-image3.jpg",
            description: "Are you an an artist of a salon owner that seems to have all the tools but but a very low customer retention rate? It has been proven that a well prepared and trained customer service staff can be the difference between filling your books to the rim or struggling to keep you customer base coming back. This course will teach you how to make customer service your biggest competitive advantage in the industry. After completing this class, you will understand how to tailor your own Customer service to stand out from other competitors. Specially designed for startup and small salon owners as well as individuals who are looking to increase their customer retention rate by focusing on customer service.",
            price: "$$$",
            note: "Participants must be licensed and have Lash Certificates.",
            id: "9"
          }
  ];


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
      