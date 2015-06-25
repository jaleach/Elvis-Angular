;( function (){

    "use strict";

    angular.module('Epcomments')

    .controller('comment', ['$scope', '$http', 'PARSE', '$location', 'CommentFactory',


      function ($scope, $http, PARSE, $location, CommentFactory) {
        $scope.title = 'Elvis said what';



        //add an Elvis comment method
        $scope.addComment = function(e){

        // var p = new Comment (e);
        // $http.post(PARSE.URL + 'classes/comments', p, PARSE.CONFIG)

        CommentFactory.addComment(e).success(function(){

          $location.path('/epsaid');

        });

      };
    }])



}());
