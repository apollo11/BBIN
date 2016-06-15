/**
 * Created by apollomm on 6/8/16.
 */

'use strict';
app.factory('Lottery',['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.CMS + 'api/v1/lottery', {},
        {
            getLottery: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);