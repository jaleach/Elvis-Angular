;( function (){

    "use strict";

    angular.module('Epcomments')

    .controller('comment', ['$scope', '$http', 'PARSE', '$location',


      function ($scope, $http, PARSE, $location) {
        $scope.title = 'Elvis said what';

        // Elvis Comment contructor
        var Comment = function(options){
          this.esays = options.esays;
          this.age = options.age;

        };

        //add an Elvis comment method
        $scope.addComment = function(e){

        var p = new Comment (e);
        $http.post(PARSE.URL + 'classes/comments', p, PARSE.CONFIG)

        .success(function(){
          //routehome
          $location.path('/epsaid');

        });

        };
    }])



}());
