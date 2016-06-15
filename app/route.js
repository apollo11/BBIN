/**
 * Created by apollomm on 6/2/16.
 */
'use strict';
app.config(['$stateProvider'
    , '$urlRouterProvider'
    , '$locationProvider'
    , function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //use the HTML5 History API
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        //For unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('root', {
                abstract:true,
                views: {
                    'logout': {
                        controller:'LogoutController',
                        templateUrl:'components/logout/logoutView.html'
                    },
                    'login': {
                        controller:'LoginController',
                        templateUrl:'components/login/loginView.html'
                    },
                    'footer': {
                        controller:'FooterController',
                        templateUrl:'components/footer/footerView'

                    },
                    'menu': {
                        controller:'MenuController',
                        templateUrl:'components/menu/menuView.html'
                    }
                }
            })

            .state('betrecord', {
                url:'/betrecord',
                parent:'root',
                views: {
                    '@': {
                        controller:'BetRecordController',
                        templateUrl: 'components/betrecord/betrecordView.html'
                    }
                }

            })

            .state('betrecordbymodifieddate', {
                url:'/betmodified',
                parent:'root',
                views: {
                    '@': {
                        controller:'BetModifiedController',
                        templateUrl: 'components/betrecordbymodifieddate/betrecordbymodifieddateView.html'
                    }
                }
            })

            .state('checkbalance', {
                url:'/checkbalance',
                parent:'root',
                views: {
                    '@':{
                        controller:'CheckBalanceController',
                        templateUrl:'components/checkbalance/checkbalanceView.html'
                    }
                }
            })

            .state('checktransfer', {
                url:'/checktransfer',
                parent:'root',
                views: {
                    '@': {
                        controller:'CheckTransferController',
                        templateUrl:'components/checktransfer/checktransferView.html'
                    }
                }
            })

            .state('createmember', {
                url:'/createmember',
                parent:'root',
                views: {
                    '@': {
                        controller:'CreateMemberController',
                        templateUrl:'components/createmember/creatememberView.html'
                    }
                }
            })

            //.state('login', {
            //    url:'/login',
            //    controller:'LoginController',
            //    templateUrl:'components/login/loginView.html'
            //})

            .state('logout', {
                url:'/logout',
                parent:'root',
                views: {
                    '@': {
                        controller:'LogoutController',
                        templateUrl:'components/logout/logoutView.html'
                    }
                }
            })

            .state('transfer', {
                url:'/transfer',
                parent:'root',
                views: {
                    '@': {
                        controller:'TransferController',
                        templateUrl:'components/transfer/transferView.html'
                    }
                }
            })

            .state('transferrecord', {
                url:'/transferrecord',
                parent:'root',
                views: {
                    '@':{
                        controller:'TransferRecordController',
                        templateUrl:'components/transferrecord/transferrecordView.html'
                    }
                }
            })

            .state('playgames', {
                url:'/',
                parent:'root',
                views: {
                    '@': {
                        controller:'GamesController',
                        templateUrl:'components/games/gamesView.html'
                    }
                }
            })

            .state('bbsport', {
                url:'/bbsport',
                parent:'root',
                views: {
                    '@': {
                        controller:'BBsportGamesController',
                        templateUrl:'components/bbsport/bbsportView.html'
                    }
                }
            })

            .state('casinogames', {
                url:'/casino',
                parent: 'root',
                views: {
                    '@': {
                        controller:'CasinoGamesController',
                        templateUrl:'components/casino/casinoView.html'
                    }
                }

            })

            .state('livegames', {
                url:'/live',
                parent:'root',
                views: {
                    '@': {
                        controller:'LiveGamesController',
                        templateUrl:'components/live/liveView.html'
                    }
                }
            })

            .state('lottery', {
                url:'/lottery',
                parent:'root',
                views: {
                    '@': {
                        controller:'LotteryGameController',
                        templateUrl:'components/lottery/lotteryView.html'
                    }
                }
            })

            .state('3dhall', {
                url:'/3dhall',
                parent:'root',
                views: {
                    '@': {
                        controller:'HallController',
                        templateUrl:'components/hall/hallView.html'
                    }
                }
            })

    }]);
