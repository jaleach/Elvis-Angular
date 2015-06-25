;( function (){

    "use strict";
    //setup module
    angular.module('Epcomments', ['ngRoute'])

    .constant('PARSE', {

      //parse
      URL: 'http://api.parse.com/1/',
      CONFIG: {
        headers: {
          'x-Parse-Application-Id' : 'YjaXp1hOJiHPHLRSYEVefaOEg7yvolpzHRo9phbZ',
          'x-Parse-REST-API-Key' : 'BBZkUJsbaaXJZIlCWwfatLrbdttM1FJHSqMosPs0'
        }
      }
    })

    .config(['$routeProvider',

      function  ($routeProvider){

        $routeProvider.when('/', {

          controller: 'comment',
          templateUrl: 'js/comment/home.tpl.html'


    })
        .when('/epsaid',{
          controller: "commentlist",
          templateUrl: 'js/comment/epsaid.tpl.html'


        });

        }
        ]);


      // .controller('Commentlist', [ '$scope',
      //   function($scope) {

      //   }]);




}());
