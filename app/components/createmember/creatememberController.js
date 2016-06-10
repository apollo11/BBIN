/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('CreateMemberController',['$scope'
    , 'CreateMember'
    ,'WEBSITE'
    ,'UPPERNAME'
    ,function($scope, CreateMember, WEBSITE, UPPERNAME) {

    $scope.title = 'Create Member';
    $scope.esdDate = moment();
    $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
    $scope.create = {};
    $scope.params = {};
    $scope.keyB = 'rzCosy3F6t';

    $scope.saveAccount = function () {
        $scope.encrypt = md5(WEBSITE + $scope.create.username + $scope.keyB + $scope.esdFormat);
        $scope.params = {
            website: WEBSITE,
            username: $scope.create.username,
            uppername: UPPERNAME,
            key:'1234567'+ $scope.encrypt +'1234567',
            password:$scope.create.password
        };

        CreateMember.User($scope.params,
            function(response) {
                $scope.test = response;
            console.log(response);
        },
        function (error) {
            console.log (error);
        })

    }




}]);