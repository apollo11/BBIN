/**
 * Created by apollomm on 6/8/16.
 */

'use strict';
app.factory('LiveGames',['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/live', {},
        {
            getLive: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);