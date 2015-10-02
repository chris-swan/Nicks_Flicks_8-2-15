nicksFlicks.controller('MoviesCtrl', function MoviesCtrl($scope, MoviesFactory) {
  $scope.movies = MoviesFactory.movies;
  $scope.MoviesFactory = MoviesFactory;
  // $scope.ctrlmovie = "Jurassic Park";
  $scope.submit = function() {
    alert("You added a review!")
  };
});