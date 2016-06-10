/**
 * Created by apollomm on 6/2/16.
 */
'use strict';

app.factory('BetRecordService', ['$resource','BASEURL', function($resource, BASEURL) {
    var ENDPOINT = $resource(BASEURL + 'BetRecord?website=:website&uppername=:uppername&key=:key&gamekind=:gamekind&rounddate=:rounddate&username=:username',{},
        {
            getBetRecord: {
                method:'GET'
            }
        });

    return ENDPOINT;
}]);
