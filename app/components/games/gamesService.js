/**
 * Created by apollomm on 6/6/16.
 */
'use strict';
app.factory('PLayGame',['$resource','BASE', function ($resource, BASE ) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/bbin_games', {},
        {
            getGames: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);
