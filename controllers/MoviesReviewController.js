nicksFlicks.controller('MoviesReviewCtrl', function MoviesReviewCtrl($scope, $stateParams, MoviesFactory, UtilitiesFactory) {
  $scope.movie = UtilitiesFactory.findByTitle(MoviesFactory.movies, $stateParams.movieTitle);
  // $scope.addReview = function() {
  //   $scope.movie.reviews.push({ text: $scope.review });
  //   $scope.review = null;
  // }
});
