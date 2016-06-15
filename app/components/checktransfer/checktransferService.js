'use strict';
app.factory('CheckTransfer', ['$resource', 'BASE', function($resource, BASE) {

    var ENDPOINT = $resource(BASE.URL + 'CheckTransfer?website=:website&key=:key&transid=:transid', {},
        {
            getTransferRecord: {
                method:'GET'
            }
        });
    return ENDPOINT;
}]);