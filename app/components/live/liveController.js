/**
 * Created by apollomm on 6/8/16.
 */
'use strict';
app.controller('LiveGamesController', ['$scope'
    , 'LiveGames'
    , '$window'
    , '$cookies'
    , 'BASE', function($scope, LiveGames, $window, $cookies, BASE) {

         $scope.title = 'Live Games';
        $scope.esdDate = moment();
        $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
        $scope.game = {};
        $scope.params = {};
        $scope.keyB = 'hv4E69TgNW';
        $scope.getCookie = $cookies.get('username');

        LiveGames.query(function (response) {
            $scope.result = response
        }, function (error) {
            console.error(error);
        });

        $scope.connectGames = function (gameType) {
            $scope.params.encrypt = md5(BASE.WEBSITE + $scope.getCookie + $scope.keyB + $scope.esdFormat);
            $scope.params.gamekind = 3;
            $window.open(BASE.LOGIN +'PlayGame?'
                + 'website='   + BASE.WEBSITE
                + '&username=' + $scope.getCookie
                + '&gametype=' + gameType
                + '&gamekind='  +  $scope.params.gamekind
                + '&gamecode='  + 1
                + '&key='      + '123456'+ $scope.params.encrypt + '123'
                + '&lang='     + 'en-us'
                , 'Test Game', 'width=800, height=600');
        };

        $scope.imageUri =function (uri) {
            return _.replace(uri,'public://', '');
        }
}]);