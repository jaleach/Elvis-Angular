;( function (){

    "use strict";

    angular.module('Epcomments')

    .factory('CommentFactory', ['$http', 'PARSE',

      function($http, PARSE) {




        var getSay = function() {

          return $http.get(PARSE.URL + 'classes/comments', PARSE.CONFIG);

        };


        return {

          getSay : getSay


        };



      }


      ])

}());
