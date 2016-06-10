/**
 * Created by apollomm on 6/8/16.
 */

'use strict';
app.factory('LiveGames',['$resource','CMS_URL', function($resource, CMS_URL) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/live', {},
        {
            getLive: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);