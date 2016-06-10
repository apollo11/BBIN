/**
 * Created by apollomm on 6/8/16.
 */
'use strict';
app.factory('Casino',['$resource','CMS_URL', function($resource, CMS_URL) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/casino', {},
        {
            getCasino: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);