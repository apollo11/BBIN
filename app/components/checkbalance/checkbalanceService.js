'use strict';

app.factory('CheckBalance', ['$resource', 'BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.URL + 'CheckUsrBalance?website=:website&uppername=:uppername&key=:key&username=:username',{},
        {
            getBalance: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);


//http://linkapi.5starplayer.com//app/WebService/JSON/display.php/CheckUsrBalance?website=oriental&uppername=d5starplayer&key=12345f043da593e04474622e0b682846bd67967&username=testxyz


//http://linkapi.5starplayer.com/app/WebService/JSON/display.php/CheckUsrBalance?website=oriental&uppername=d5starplayer&key=12345f043da593e04474622e0b682846bd67967&username=testxyz