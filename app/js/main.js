;( function (){

    "use strict";
    //setup module
    angular.module('Epcomments', ['ngRoute'])

    .constant('PARSE', {


      URL: 'https://api.parse.com/1/',
      CONFIG: {

        headers: {

          'X-Parse-Application-Id' : 'OFW3Djs2cf1rwNVfnDaZyPcV3zKa69WGSzaqNPoJ',
          'X-Parse-REST-API-Key' : 'wmQvycFI9viXSQIa5qIpfIDFRerZTyLkjzWVRCFL'

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
