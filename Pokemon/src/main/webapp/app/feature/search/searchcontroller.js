(function() {

    var SearchController =  function() {
        var vm = this;

        function init() {
            searchService.getPokemon().then(function (results) {
                console.log("value of results");
                consle.log(results);
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }
        init();
    };

    angular.module('bookStore').controller('searchController', ['searchService', SearchController]);
}());