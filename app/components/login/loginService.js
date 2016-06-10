'use strict';

app.factory('Login', ['$resource', 'BASEURL_LOGIN', function($resource, BASEURL_LOGIN) {
    var ENDPOINT = $resource(BASEURL_LOGIN + 'Login2?username=:username&uppername=:uppername&key=:key&website=:website&password=:password',{},
        {
            account: {
                method: 'GET'
            }
        });

    return ENDPOINT;
}]);