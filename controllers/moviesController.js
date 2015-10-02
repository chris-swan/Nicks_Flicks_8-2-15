nicksFlicks.controller('MoviesCtrl', function MoviesCtrl($scope, MoviesFactory) {
  $scope.movies = MoviesFactory.movies;
  $scope.MoviesFactory = MoviesFactory;
  $scope.submit = function(){};
});