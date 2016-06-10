/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('TransferRecordController',['$scope', function($scope) {
    $scope.title = 'TransferRecordController';
    $scope.esdDate = moment();
    $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
    $scope.transfer = {};
    $scope.params = {};
    $scope.keyB ='p8kSw';
    $scope.encrypt = md5('orientaltestxyz'+$scope.keyB+$scope.esdFormat);

    $scope.params = {
        website:'oriental',
        key:'1234567'+ $scope.encrypt + '1',
        transid:700
    }

}]);
