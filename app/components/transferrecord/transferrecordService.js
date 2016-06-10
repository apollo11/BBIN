'use strict';
app.factory('TransferRecord', ['$resource', 'BASEURL', function($resource, BASEURL) {

    var ENDPOINT = $resource(BASEURL + 'CheckTransfer?website=:website&key=:key&transid=:transid', {},
        {
            getTransferRecord: {
                method:'GET'
            }
        });
    return ENDPOINT;
}]);