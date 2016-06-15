'use strict';

app.factory('Login', ['$resource', 'BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.LOGIN + 'Login2?username=:username&uppername=:uppername&key=:key&website=:website&password=:password',{},
        {
            account: {
                method: 'GET'
            }
        });

    return ENDPOINT;
}]);