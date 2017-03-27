"use strict";
console.log("inside CoursesFactory");
app.factory("CoursesFactory", function ($http, $q, FBCreds) {

// Function to get data from courses summary local json file
  let getCoursesSummary = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/pearl-courses-summary.json")
      .then( (data) => {
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
  // Function to get courses from local json file
  let getCourses = function() {
    return $q( (resolve, reject) => {
      $http.get("/jsons/courses.json")
      .then( (data) => {
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
// Function to save user saved courses to FB
  let saveCourseToFb = function(courseToSave) {
    return $q( (resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/coursesSaved.json`, angular.toJson(courseToSave))
      .then( (data) => {
        resolve(data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
// Function to get user saved courses from FB
  let getCourseSaved = (user) => {
    console.log("this should fire!!");
    let coursesSaved = [];
    return $q( (resolve, reject) => {
      console.log("user saved courses:", `${FBCreds.databaseURL}/coursesSaved.json?orderBy="uid"&equalTo="${user}"`);
      $http.get(`${FBCreds.databaseURL}/coursesSaved.json?orderBy="uid"&equalTo="${user}"`)
      .then( (courseObject) => {
        let courseCollection = courseObject.data;
        console.log("course collection:", courseCollection);
        Object.keys(courseCollection).forEach( (key) => {
          courseCollection[key].id = key;
          coursesSaved.push(courseCollection[key]);
        });
        resolve(coursesSaved);
        console.log("courses saved:", coursesSaved);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
// Function to delete saved courses from user profile
  let deleteCourse = (coursesSavedId) => {
    console.log("delete course in factory:", coursesSavedId);
    return $q( (resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/coursesSaved/${coursesSavedId}.json`)
      .then( (courseObject) => {
        resolve(courseObject);
      });
    });
  };


  return {getCoursesSummary, getCourses, saveCourseToFb, getCourseSaved, deleteCourse};
});




