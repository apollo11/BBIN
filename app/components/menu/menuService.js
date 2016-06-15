/**
 * Created by apollomm on 6/14/16.
 */
'use strict';
app.factory('Menu',['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/bbin_menu', {},
        {
            getMenu: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);