/**
 * Created by apollomm on 6/7/16.
 */
'use strict';
app.factory('Auth', function($cookieStore, ACCESS_LEVELS) {
    var _user = $cookieStore.get('user');

    var setUser = function(user) {
        if(!user.role || user.role < 0) {
            user.role = ACCESS_LEVELS.pub;
        }
        _user = user;
        $cookieStore.put('user', _user);
    };
    return {
        isAuthorized: function(lvl) {
            return _user.role >= lvl;
        },
        setUser: setUser,

        isLoggedIn: function() {
            return _user ? true : false;
        },
        getUser: function() {
            return _user;
        },
        getId: function() {
            return _user ? _user._id : null;
        },
        getToken: function() {
            return _user ? _user.token:'';
        },
        logout: function() {
            $cookieStore.remove('user');
            _user = null;
        }

    }
});

app.run(function($rootScope, $location, Auth) {
    //Set a watch on the routeChangeStart
    $rootScope.$on('$routeChangeStart', function(evt, next, curr) {
        if(!Auth.isAuthorized(next.access.level)) {
            if(Auth.isLoggedIn()) {
                //The user is logged in but does not have permission to view the view
                $location.path('/');
            }else {
                $location.path('login');

            }
        }
    })
});