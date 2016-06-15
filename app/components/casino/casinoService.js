/**
 * Created by apollomm on 6/8/16.
 */
'use strict';
app.factory('Casino',['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/casino', {},
        {
            getCasino: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);