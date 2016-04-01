var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
        })

        .state('macarons', {
            url: '/macarons',
            templateUrl: 'templates/macarons.html',
        })

        .state('gifts', {
            url: '/gifts',
            templateUrl: 'templates/gifts.html',
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
        })
});