;( function (){

    "use strict";

    angular.module('Epcomments')

    .factory('CommentFactory', ['$http', 'PARSE',

      function($http, PARSE) {

        var endpoint = PARSE.URL + 'classes/comments/'
        // Elvis Comment contructor
        var Comment = function(options){
          this.esays = options.esays;
          this.age = options.age;
          this.date = options.date;
          this.song = options.song;
          this.mov  = options.mov

        };



        var getSay = function() {

          return $http.get(endpoint, PARSE.CONFIG);

        };
        var addComment = function(newComment){
          var p = new Comment (newComment);
          return $http.post(endpoint, p, PARSE.CONFIG);
        };

        var deleteS = function(x){
          var d = endpoint + x.objectId;
          return $http.delete(d, PARSE.CONFIG);
        };

        var epx = function(id){
          return $http.get(endpoint + id, PARSE.CONFIG);

        };

        return {

          getSay : getSay,
          addComment : addComment,
          deleteSaying : deleteS,
          epx : epx

        };



      }


      ])

}());
