/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('CheckTransferController',
    [
          '$scope'
        , 'CheckTransfer'
        , 'BASE'
        , '$cookies'
        , function($scope, CheckTransfer, BASE, $cookies) {
    $scope.title = 'Check Transfer';
    $scope.esdDate = moment();
    $scope.today = moment().format('YYYYMMDD');
    $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
    $scope.transfer = {};
    $scope.params = {};
    $scope.keyB ='p8kSw';
    $scope.getCookie = $cookies.get('username');
    $scope.encrypt = md5(BASE.WEBSITE + $scope.keyB + $scope.esdFormat);
    //$scope.encrypt = 'f8973262d4ab83fac813d7c2a6acae47';

    $scope.selectTransfer = function () {

        $scope.params = {
            website: BASE.WEBSITE,
            key: '1234567'+ $scope.encrypt + '1',
            transid: $scope.transfer.transid
        };

        CheckTransfer.getTransferRecord ($scope.params, function(response) {
            $scope.transferRecordResult = response;
        },
        function (error) {
            console.log(error);
        })
    }


}]);