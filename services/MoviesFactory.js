nicksFlicks.factory('MoviesFactory', function MoviesFactory() {
  var factory ={};
  factory.movies = [ 
  {name: "test", review: "It was good", id: 1}
  ];


  factory.addMovie = function() {
    factory.movies.push({ name: factory.movieName, review: factory.movieReview, id: factory.movies.length + 1 });
    factory.movieName = null;
    factory.movieReview = null;
  };

  return factory;
});
