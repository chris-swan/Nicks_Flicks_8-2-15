var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/home.html",
      },
    }
  });

  $stateProvider.state('movies', {
    url: "/movies",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: 'partials/movies.html',
        controller: 'MoviesCtrl'
      },
    }
  });

  $stateProvider.state('movies.review', {
    url: "/:movieTitle",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/movies.reviews.html",
        controller: "MoviesReviewCtrl"
      },
    }
  });

});