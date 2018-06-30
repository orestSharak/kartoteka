var myApp = angular.module("myApp", [
  'ngRoute',
  'ngAnimate',
  'myControllers',
  'myDirectives',
  'slickCarousel',
  'duScroll',
  'djds4rce.angular-socialshare'
]);
myApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/main', {
          templateUrl: 'views/main.html'
        })
        .when('/tickets', {
          templateUrl: 'views/tickets.html'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html'
        })
        .when('/shows', {
          templateUrl: 'views/shows.html',
          controller: 'ArtistsCtrl'
        })
        .when('/shows/:id', {
          templateUrl: 'views/shows-detail.html',
          controller: 'ArtistsDetailCtrl'
        })
        .when('/schedule', {
          templateUrl: 'views/schedule.html',
          controller: 'ArtistsCtrl'
        })
        .when('/artists', {
          templateUrl: 'views/artists.html',
          controller: 'ArtistsCtrl'
        })
        .when('/artists/:id', {
          templateUrl: 'views/artists-detail.html',
          controller: 'ArtistsDetailCtrl'
        })
        .when('/map', {
          templateUrl: 'views/map.html'
        })
        .otherwise({
          redirectTo: '/main'
        });
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!');

    new WOW().init();

  }])

  /* for a page position when user press back */

    .run(["$rootScope", "$anchorScroll","$FB" , function ($rootScope, $anchorScroll,$FB) {
      $rootScope.$on("$locationChangeSuccess", function () {
        $anchorScroll();
      });
      $FB.init('309586526100252');
    }]);








