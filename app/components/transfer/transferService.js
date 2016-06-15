'use strict';

app.factory('Transfer', ['$resource', 'BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.URL + 'Transfer?website=:website&uppername=:uppername&username=:username&remitno=:remitno&action=:action&remit=:remit&key=:key',
        {},
        {
            saveTrans: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);

//http://linkapi.5starplayer.com/app/WebService/JSON/display.php/Transfer?
// website=oriental
// &uppername=d5starplayer
// &username=testxyz
// &remitno=0809
// &action=IN
// &remit=1
// &key=123663a2b088be656c01bbe3ccf70c4366012345678