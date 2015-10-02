nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, MoviesFactory, UtilitiesFactory) {
  $scope.movie = UtilitiesFactory.findById(MoviesFactory.movies, $stateParams.movieId);
  $scope.addReview = function() {
    $scope.movie.reviews.push({ name: $scope.reviewName });
    $scope.reviewName = null;
  }
});
