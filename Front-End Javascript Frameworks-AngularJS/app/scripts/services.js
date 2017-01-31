'use strict';
angular.module('confusionApp')
.constant("baseURL","http://localhost:3000/")
.service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

  this.getPromotion = function() {
    return $resource(baseURL + "promotions/:id");
  };
  this.getDishes = function(){
    return $resource(baseURL+"dishes/:id",null, {'update':{method:'PUT'}});
  };
}])
.factory('corporateFactory', ['$resource', 'baseURL', function ($resource,baseURL) {

  var corpfac = {};
  // Remember this is a factory not a service
  corpfac.getLeader = function(){
    return $resource(baseURL + "leadership/:id");
  };
  return corpfac;
}])
.service('feedbackService', ['$resource', 'baseURL', function($resource,baseURL) {

  this.sendFeedback = function(){
    return $resource(baseURL+"feedback/:id", {'save':{method:'POST'}});
  };
}])
