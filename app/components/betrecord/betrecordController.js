/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('BetRecordController',
    ['$scope'
        ,'BetRecordService'
        ,'WEBSITE'
        ,'UPPERNAME'
        ,'$cookies', function($scope, BetRecordService, WEBSITE, UPPERNAME, $cookies) {
            $scope.title = 'BET Record';
            $scope.date = new Date();
            $scope.esdDate = moment();
            $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
            $scope.dateFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYY-MM-DD');
            $scope.keyB ='Yg8OJw7';
            $scope.getCookie = $cookies.get('username');
            $scope.encrypt = md5(WEBSITE + $scope.getCookie +$scope.keyB + $scope.esdFormat);

            $scope.params = {
                 website: WEBSITE,
                 uppername: UPPERNAME,
                 key: '1234'+ $scope.encrypt +'1',
                 gamekind:5,
                 rounddate: $scope.dateFormat,
                 username: $scope.getCookie
            };

            BetRecordService.getBetRecord($scope.params, function(response) {
                    $scope.BetRecordResult = response;
                    console.log($scope.BetRecordResult);
                },
                function (error) {
                    console.log(error)
                });

}]);