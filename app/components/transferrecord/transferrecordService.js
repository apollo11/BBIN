'use strict';
app.factory('TransferRecord', ['$resource', 'BASEURL', function($resource, BASE) {

    var ENDPOINT = $resource(BASE.URL + 'CheckTransfer?website=:website&key=:key&transid=:transid', {},
        {
            getTransferRecord: {
                method:'GET'
            }
        });
    return ENDPOINT;
}]);