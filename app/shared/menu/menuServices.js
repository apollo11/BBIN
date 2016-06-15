/**
 * Created by apollomm on 6/14/16.
 */
'use strict';
app.factory('Menu',['$resource', 'CMS_URL', function($resource, CMS_URL) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/bbin_menu',{},
        {
            getMenu: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);