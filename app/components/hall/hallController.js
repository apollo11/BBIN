/**
 * Created by apollomm on 6/8/16.
 */
'use strict';
app.controller('HallController',
    [
      '$scope'
    , 'HallService'
    , '$window'
    , '$cookies'
    , 'BASE', function($scope, HallService, $window, $cookies, BASE) {

        $scope.title = '3DHall Games';
        $scope.esdDate = moment();
        $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
        $scope.game = {};
        $scope.params = {};
        $scope.keyB = 'hv4E69TgNW';
        $scope.getCookie = $cookies.get('username');

        HallService.query(function (response) {
            $scope.result = response
        }, function (error) {
            console.error(error);
        });

        $scope.connectGames = function (gameType) {
            $scope.params.encrypt = md5(BASE.WEBSITE + $scope.getCookie + $scope.keyB + $scope.esdFormat);
            $window.open(BASE.LOGIN +'PlayGame?'
                + 'website='   +BASE.WEBSITE
                + '&username=' +$scope.getCookie
                + '&gametype=' +gameType
                + '&key='      +'123456'+ $scope.params.encrypt + '123'
                , 'Test Game', 'width=800, height=600');
        };

        $scope.imageUri =function (uri) {
            return _.replace(uri,'public://', '');
        }

    }]);