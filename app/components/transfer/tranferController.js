/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.controller('TransferController',
    ['$scope'
        ,'Transfer'
        ,'BASE'
        ,'$cookies', function($scope, Transfer, BASE, $cookies) {
            $scope.title = 'Transfer';
            $scope.esdDate = moment();
            $scope.esdFormat = moment.tz($scope.esdDate, "America/New_York").format('YYYYMMDD');
            $scope.saveM = {};
            $scope.params = {};
            $scope.keyB = '6nE471';
            $scope.getCookie = $cookies.get('username');
            $scope.testEncrypt = md5('orientaltestxyz45456nE47120160603');

        $scope.saveTransfer = function () {
            $scope.encrypt = md5(BASE.WEBSITE + $scope.getCookie + $scope.saveM.remitno + $scope.keyB + $scope.esdFormat);
            $scope.params = {
                website: BASE.WEBSITE,
                uppername: BASE.UPPERNAME,
                username: $scope.getCookie,
                remitno: $scope.saveM.remitno,
                remit: $scope.saveM.remit,
                action: $scope.saveM.action,
                key: '123'+ $scope.encrypt +'12345678'
            };

            Transfer.saveTrans($scope.params,
                function(response) {
                    $scope.result = response;
                    console.log(response);
                },
                function (error) {
                    console.log(error);
                })
        };

}]);


//http://linkapi.5starplayer.com/app/WebService/JSON/display.php/Transfer?
// website=oriental
// &uppername=d5starplayer
// &username=testxyz
// &remitno=0809
// &action=IN
// &remit=1
// &key=123663a2b088be656c01bbe3ccf70c4366012345678