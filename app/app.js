'use strict';
var app = angular.module('bbin',
    [
         'ui.router'
        ,'ngResource'
        ,'ngCookies'
        ,'infinite-scroll'
    ]
);

app.constant('BASE', {
    LOGIN:'http://888.5starplayer.com/app/WebService/JSON/display.php/',
    LOTTERY:'http://888.5starplayer.com/app/WebService/JSON/display.php/',
    WEBSITE:'oriental',
    UPPERNAME:'d5starplayer',
    CMS:'http://playtechcms.orientalgame.com:8081/',
    URL:'http://linkapi.5starplayer.com/app/WebService/JSON/display.php/'
});
