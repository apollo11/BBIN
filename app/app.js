'use strict';
var app = angular.module('bbin',['ui.router', 'ngResource','ngCookies','infinite-scroll']);

app.constant('BASEURL','http://linkapi.5starplayer.com/app/WebService/JSON/display.php/');
app.constant('BASEURL_LOGIN','http://888.5starplayer.com/app/WebService/JSON/display.php/');
app.constant('LOTTERY','http://lt.5starplayer.com/app/WebService/JSON/display.php/');
app.constant('WEBSITE','oriental');
app.constant('UPPERNAME','d5starplayer');
app.constant('CMS_URL','http://playtechcms.orientalgame.com:8081/');
