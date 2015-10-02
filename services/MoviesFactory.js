nicksFlicks.factory('MoviesFactory', function MoviesFactory() {
  var factory ={};

  //Hardcoded movie reviews
  factory.movies = [ 
  {title: "test", review: "It was good"},
  {title: "Second Movie", review: "It was bad"}
  ];

//function for adding new movie reviews:
  factory.addMovie = function() {
    factory.movies.push({ title: factory.movieTitle, review: factory.movieReview });
    factory.movieTitle = null;
    factory.movieReview = null;
  };

  return factory;
});
