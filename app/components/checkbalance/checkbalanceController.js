/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('CheckBalanceController',
    ['$scope'
        ,'CheckBalance'
        ,'WEBSITE'
        ,'UPPERNAME'
        ,'$cookies', function($scope, CheckBalance, WEBSITE, UPPERNAME, $cookies) {

        $scope.title = 'Check Balance';
        $scope.esdDate = moment();
        $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
        $scope.checkBal = {};
        $scope.params = {};
        $scope.keyB = 'lNNzYZ5byA';
        $scope.getCookie = $cookies.get('username');
        $scope.encrypt = md5(WEBSITE + $scope.getCookie + $scope.keyB + $scope.esdFormat);

        $scope.params = {
            website: WEBSITE,
            uppername: UPPERNAME,
            username: $scope.getCookie,
            key: '12345' + $scope.encrypt + '12'
        };

        CheckBalance.getBalance($scope.params, function (response) {
            $scope.checkBalanceResult = response.data;
            console.log($scope.checkBalanceResult);
            },
            function (error) {
                console.log(error)
            });



}]);