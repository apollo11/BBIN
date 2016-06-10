/**
 * Created by apollomm on 6/8/16.
 */
'user strict';
app.factory('BBSport',['$resource','CMS_URL', function($resource, CMS_URL) {
    var ENDPOINT = $resource(CMS_URL + 'api/v1/bbsport', {},
        {
        getbbsport: {
            method:'GET'
        }
    });

    return ENDPOINT;
}]);