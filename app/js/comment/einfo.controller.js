;( function (){

    "use strict";
    angular.module('Epcomments')

    .controller('einfo', ['$scope', 'CommentFactory', '$routeParams',
      function($scope, CommentFactory, $routeParams) {

        var id = $routeParams.id;
        CommentFactory.epx(id).success( function(data){

          $scope.epdata = data;


        });


      }

      ])

}());
