nicksFlicks.factory('UtilitiesFactory', function() {
  return {

    //finding movie by movie name:
    findById: function(collection, title) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].title == title) {
          return collection[i];
        }
      }
      return null;
    }
  };
});
