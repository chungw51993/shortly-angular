angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll($scope.data)
      .then(function (resp) {
        $scope.data.links = resp;
      })
      .catch(function(err) {
        console.log(err);
      });
  };



  $scope.getAll();

});


// var LinkSchema = new mongoose.Schema({
//   visits: Number,
//   link: String,
//   title: String,
//   code: String,
//   baseUrl: String,
//   url: String
// });