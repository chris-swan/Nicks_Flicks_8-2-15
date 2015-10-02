nicksFlicks.controller('MoviesCtrl', function moviesCtrl($scope, moviesFactory) {
  $scope.movies = moviesFactory.movies;
  $scope.moviesFactory = moviesFactory;
  // $scope.ctrlmovie = "Math";
  $scope.submit = function() {
    alert("You added a review!")
  };
});