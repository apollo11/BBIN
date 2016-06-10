/**
 * Created by apollomm on 6/6/16.
 */
'use strict';
app.factory('PLayGame',['$resource','CMS_URL', function ($resource, CMS_URL ) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/bbin_games', {},
        {
            getGames: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);
