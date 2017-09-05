let app = angular.module('app', []);
        app.controller('controller', function($scope) {
            $scope.header = "Movies";
            $scope.movies = [
            {name:'Conspiracy Theory', year:'1997'},
            {name:'The book of life',year:'2014'},
            {name:'Sleeping with the enemy',year:'1991'},
            {name:'Mona Lisa Smile',year:'2003'},
            {name:'Eat Pray Love',year:'2010'},
            {name:'The mechanic',year:'2011'},
            {name:'The Italian Job',year:'2003'},
            {name:'The Last Man on Earth',year:'1964'},
            {name:'Six degrees of separtion',year:'1993'}]

            $scope.remove = function(movies) { 
                let index = $scope.movies.indexOf(movies);
                $scope.movies.splice(index, 1);  
              };

            $scope.add = function(movieName, movieYear) {
                let name = $scope.movieName;
                let year = $scope.movieYear;
                let addedMovie = {name, year}
                $scope.movies.push(addedMovie);
              };
        });


