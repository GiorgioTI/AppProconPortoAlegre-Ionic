/*jslint browser:true, devel:true, white:true, vars:true */

/*global $:false */

/* jshint strict: false, -W117 */
angular.module("topApp").factory("proconAPI", function ($http, config) {
   var _getRanking = function () {
       return $http.get(config.baseUrL);
   };

   return{
       getRanking: _getRanking
   };
});