/**
 * Created by apollomm on 6/8/16.
 */

'use strict';
app.factory('HallService',['$resource','CMS_URL', function($resource, CMS_URL) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/3dhall', {},
        {
            getLive: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);