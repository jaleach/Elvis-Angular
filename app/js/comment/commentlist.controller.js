;( function (){

    "use strict";

    angular.module('Epcomments')

    .controller('commentlist', ['$scope', '$http', 'PARSE',


      function ($scope, $http, PARSE) {
        $scope.title2 = ' Elvis Sayings';

        $scope.commentlist = [];
        $http.get(PARSE.URL + 'classes/Comment', PARSE.CONFIG)
        .success(function(data){
          $scope.commentlist = data.results;


        })
    }

    ]);


}());
