/**
 * Created by apollomm on 6/8/16.
 */
'use strict';
app.factory('BBSport',['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/bbsport', {},
        {
        getbbsport: {
            method:'GET'
        }
    });

    return ENDPOINT;
}]);