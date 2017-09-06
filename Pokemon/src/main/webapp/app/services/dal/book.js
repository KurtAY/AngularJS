"use strict";

(function () {

    angular.module("bookStore").service("pokeDal", ["dal", PokeDal]);

    function PokeDal (dal) {

        this.getPokemon = function (pokeNo) {
            return dal.http.GET("http://pokeapi.co/api/v1/pokemon/" + pokeNo +"/");
        };

        this.saveBook = function (bookToSave) {
            return dal.http.POST("rest/bookstore/json", bookToSave);
        };

        this.updateBook = function (bookToUpdate) {
            return dal.http.PUT("rest/bookstore/json/", bookToUpdate);
        };

        this.deleteBook = function (bookToDelete) {
            return dal.http.DELETE("/rest/bookstore/json/", bookToDelete);
        };

    }
}());
