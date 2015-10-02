nicksFlicks.factory('MoviesFactory', function MoviesFactory() {
  var factory ={};
  factory.movies = [];
  factory.addMovie = function() {
    factory.movies.push({ name: factory.movieName, id: factory.movies.length + 1, reviews: [] });
    factory.movieName = null;
  };

  return factory;
});
