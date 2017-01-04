/*jslint browser:true, devel:true, white:true, vars:true */

/*global $:false */

/* jshint strict: false, -W117 */

angular.module("topApp",['ngSanitize']);
angular.module("topApp").controller("procon",function($scope,$http){ 

    $http.get("http://procon.procempa.com.br/atendimento/WSRest/wsProconRanking.php").success(function (result) {
        $scope.lista = result.empresasMaisReclamadas;
        
        }).error(function (result,status) {
            $scope.message = "Aconteceu um problema.";
        });
    $scope.data = new Date();   
});