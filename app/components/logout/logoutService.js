'use strict';

app.factory('Logout',['$resource','BASE', function($resource, BASE) {

    var ENDPOINT = $resource(BASE.URL + 'Logout?website=:website&username=:username&key=:key', {},
        {
            userStatus: {
                method: 'GET'
            }
        });

    return ENDPOINT;
}]);