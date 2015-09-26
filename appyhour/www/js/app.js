angular.module('imageShare', ['ionic','happyhour.controllers','happyhour.services','happyhour.directives'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('home');
  });
}).config(['$stateProvider',function($stateProvider){
        $stateProvider.state('home',{
            url:'/home',
            controller:'HomeController',
            templateUrl:'views/home.html'
        }).state('chat',{
            url:'/chat',
            controller:'ChatController',
            templateUrl:'views/chat.html'
        });
}]);
