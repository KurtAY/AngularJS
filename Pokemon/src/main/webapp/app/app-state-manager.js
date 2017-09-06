"use strict";

(function () {

    angular.module('bookStore').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/search");

        $stateProvider.state("battle", {
            url: "/battle",
            templateUrl: "app/feature/battle/battle.html"
        }).state("box", {
            url: "/box",
            templateUrl: "app/feature/box/box.html"
        }).state("search", {
            url: "/search",
            templateUrl: "app/feature/search/search.html"
        })
    });
}());