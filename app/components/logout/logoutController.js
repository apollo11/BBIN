/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('LogoutController',
    ['$scope'
        , 'Logout'
        ,'$cookies'
        ,'$window'
        ,'WEBSITE'
        ,'UPPERNAME'
        , function($scope, Logout, $cookies, $window, WEBSITE, UPPERNAME) {

            $scope.title = 'LogoutController';
            $scope.esdDate = moment();
            $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
            $scope.logout = {};
            $scope.params = {};
            $scope.keyB = '0xUtO';
            $scope.getCookie = $cookies.get('username');

            $scope.logoutAccount = function () {
                $scope.keyB = '0xUtO';
                $scope.encrypt = md5(WEBSITE + $scope.getCookie + $scope.keyB + $scope.esdFormat);
                $scope.params = {
                    website: WEBSITE,
                    username: $scope.getCookie,
                    key:'123456'+ $scope.encrypt + '123'
                };
                Logout.userStatus($scope.params,
                function(response) {
                    $scope.test = response;
                    $cookies.remove('username');
                    console.log (response);
                },
                function (error) {
                    console.log(error);
                })

            }


}]);
