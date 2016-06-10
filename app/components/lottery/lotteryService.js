/**
 * Created by apollomm on 6/8/16.
 */

'use strict';
app.factory('Lottery',['$resource','CMS_URL', function($resource, CMS_URL) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/lottery', {},
        {
            getLottery: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);