;( function (){

    "use strict";

    angular.module('Epcomments')

    .controller('commentlist', ['$scope', '$http', 'PARSE', 'CommentFactory',


      function ($scope, $http, PARSE, CommentFactory) {
        $scope.title2 = ' Elvis Sayings';

        $scope.commentlist = [];

        CommentFactory.getSay().success(function(data){
          $scope.commentlist = data.results;


        })
    }

    ]);


}());
