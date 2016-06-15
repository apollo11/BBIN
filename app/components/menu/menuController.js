/**
 * Created by apollomm on 6/14/16.
 */
'use strict';
app.controller('MenuController', ['$scope','Menu' ,  function ($scope, Menu) {

        Menu.query(function (response) {
            $scope.result = response;
        }, function (error) {
            console.error(error);
        })

}]);
