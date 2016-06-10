/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('LoginController',
    ['$scope'
        ,'Login'
        ,'Logout'
        ,'WEBSITE'
        ,'UPPERNAME'
        ,'$cookies'
        ,'$window'
        , function($scope, Login, Logout, WEBSITE, UPPERNAME, $cookies, $window) {

        $scope.title = 'Login';

        $scope.esdDate = moment();
        $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
        $scope.login = {};
        $scope.params = {};
        $scope.keyB = 'Oa21bV0';
        $scope.getCookie = $cookies.get('username');

        $scope.loginAccount = function () {
            $scope.LoginEncrypt = md5(WEBSITE + $scope.login.username + $scope.keyB + $scope.esdFormat);
            $scope.params = {
                website: WEBSITE,
                uppername: UPPERNAME,
                username: $scope.login.username,
                password:$scope.login.password,
                key:'12345678'+ $scope.LoginEncrypt +'12345678'
            };

            Login.account($scope.params,
                function(response) {
                    $scope.result = response;
                    if ($scope.result.data.Code === 99999) {
                        //Notify if success
                        toastr.success($scope.result.data.Code+':'+ $scope.result.data.Message);
                        //Insert cookies
                        $cookies.put('username',$scope.params.username);
                        //Redirect to all games
                        $window.location.href= 'http://bbin.local/playgames';
                    } else {
                        toastr.error($scope.result.data.Code + ':'+ $scope.result.data.Message,'',
                            { positionClass:'toast-top-center', hideDuration:100 });
                    }
                },
                function (error) {
                    console.log (error);
                });
        };

        $scope.logoutAccount = function () {
            $scope.LoginKeyB = '0xUtO';
            $scope.LogoutEncrypt = md5(WEBSITE + $scope.getCookie + $scope.LoginKeyB + $scope.esdFormat);
            $scope.params = {
                website: WEBSITE,
                username: $scope.getCookie,
                key:'123456'+ $scope.LogoutEncrypt + '123'
            };
            Logout.userStatus($scope.params,
                function(response) {
                    $scope.test = response;
                    $cookies.remove('username');
                    $window.location.href= 'http://bbin.local/login';
                    console.log (response);
                },
                function (error) {
                    console.log(error);
                }
            )

        };

        $scope.emptyCookie = function () {
            return   _.isEmpty($scope.getCookie);
        };

        $scope.notEmptyCookie = function () {
            return !_.isEmpty($scope.getCookie);
        };

}]);