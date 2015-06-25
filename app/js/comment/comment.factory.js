;( function (){

    "use strict";

    angular.module('Epcomments')

    .factory('CommentFactory', ['$http', 'PARSE',

      function($http, PARSE) {

        // Elvis Comment contructor
        var Comment = function(options){
          this.esays = options.esays;
          this.age = options.age;

        };



        var getSay = function() {

          return $http.get(PARSE.URL + 'classes/comments', PARSE.CONFIG);

        };
        var addComment = function(newComment){
          var p = new Comment (newComment);
          return $http.post(PARSE.URL + 'classes/comments', p, PARSE.CONFIG);
        };

        var deleteS = function(x){
          var d = PARSE.URL + 'classes/comments/' + x.objectId;
          return $http.delete(d, PARSE.CONFIG);
        };

        return {

          getSay : getSay,
          addComment : addComment,
          deleteSaying : deleteS


        };



      }


      ])

}());
