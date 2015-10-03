nicksFlicks.controller('MoviesReviewCtrl', function MoviesReviewCtrl($scope, $stateParams, MoviesFactory, UtilitiesFactory) {
  $scope.movie = UtilitiesFactory.findByTitle(MoviesFactory.movies, $stateParams.movieTitle);
});
