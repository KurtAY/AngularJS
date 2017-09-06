(function() {

    var SearchService =  function(pokeDal) {

        this.getPokemon = function()
        {
            return pokeDal.getPokemon();
        };
    };

    angular.module('bookStore').service('searchService', ['bookDal', SearchService]);
}());
