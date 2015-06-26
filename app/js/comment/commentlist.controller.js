;( function (){

    "use strict";

    angular.module('Epcomments')

    .controller('commentlist', ['$scope', '$http', 'PARSE', 'CommentFactory',


      function ($scope, $http, PARSE, CommentFactory) {

        $scope.commentlist = [];

        CommentFactory.getSay().success(function(data){
          $scope.commentlist = data.results;


        })
        $scope.deleteEp = function(thisdel) {

            CommentFactory.deleteSaying(thisdel).success(function(){
            $scope.commentlist = _.without($scope.commentlist, thisdel)

            })
        }


    }


    ]);


}());
