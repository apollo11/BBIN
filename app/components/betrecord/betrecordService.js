/**
 * Created by apollomm on 6/2/16.
 */
'use strict';

app.factory('BetRecordService', ['$resource','BASE', function($resource, BASE) {
    var ENDPOINT = $resource(BASE.URL + 'BetRecord?website=:website&uppername=:uppername&key=:key&gamekind=:gamekind&rounddate=:rounddate&username=:username',{},
        {
            getBetRecord: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);
