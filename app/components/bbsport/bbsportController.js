/**
 * Created by apollomm on 6/8/16.
 */
'use strict';
app.controller('BBsportGamesController',
    ['$scope'
        , 'BBSport'
        , '$window'
        , 'WEBSITE'
        , 'UPPERNAME'
        , '$cookies'
        , 'BASEURL_LOGIN', function($scope, BBSport, $window, WEBSITE, UPPERNAME, $cookies, BASEURL_LOGIN) {

        $scope.title = 'BBSport';
        $scope.esdDate = moment();
        $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
        $scope.game = {};
        $scope.params = {};
        $scope.keyB = 'hv4E69TgNW';
        $scope.getCookie = $cookies.get('username');

        BBSport.query(function (response) {
            $scope.result = response
            }, function (error) {
                console.error(error);
        });

        $scope.connectGames = function (gameType) {
            $scope.params.encrypt = md5(WEBSITE + $scope.getCookie + $scope.keyB + $scope.esdFormat);
            $window.open(BASEURL_LOGIN +'PlayGame?'
                + 'website='   +WEBSITE
                + '&username=' +$scope.getCookie
                + '&gametype=' +$scope.game.gametype
                + '&key='      +'123456'+ $scope.params.encrypt + '123'
                , 'Test Game', 'width=800, height=600');
        };



}]);
