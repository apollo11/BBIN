'use strict';

app.factory('CreateMember',['$resource','BASEURL', function($resource, BASEURL) {

    var ENDPOINT = $resource(BASEURL +'CreateMember?website=:website&username=:username&uppername=:uppername&key=:key&password=:password' ,{}, {

        User : {
            method:'GET'
        }
    });

    return ENDPOINT;

}]);