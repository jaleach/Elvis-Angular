;( function (){

    "use strict";
    //setup module
    angular.module('Epcomments', ['ngRoute'])

    .config(['$routeProvider',

      function  ($routeProvider){

        $routeProvider.when('/', {

          controller: 'Commentlist',
          template: 'Welcome to Elvis Sayings'

});
        }])


      .controller('Commentlist', [ '$scope',
        function($scope) {

        }]);




}());
