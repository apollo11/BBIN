/**
 * Created by apollomm on 6/8/16.
 */

'use strict';
app.factory('HallService',['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/3dhall', {},
        {
            getLive: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);