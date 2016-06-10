'use strict';
app.factory('CheckTransfer', ['$resource', 'BASEURL', function($resource, BASEURL) {

    var ENDPOINT = $resource(BASEURL + 'CheckTransfer?website=:website&key=:key&transid=:transid', {},
        {
            getTransferRecord: {
                method:'GET'
            }
        });
    return ENDPOINT;
}]);