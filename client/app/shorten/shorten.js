angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(resp) {
        $scope.link = '';
        return resp;
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  $location.path('/shorten');
});
