'use strict';

app.factory('Logout',['$resource','BASEURL', function($resource, BASEURL) {

    var ENDPOINT = $resource(BASEURL + 'Logout?website=:website&username=:username&key=:key', {},
        {
            userStatus: {
                method: 'GET'
            }
        });

    return ENDPOINT;
}]);