angular
    .module('myApp', [])
    .controller('mainCtrl', mainCtrl)


function mainCtrl($scope){
    $scope.count = 0;
    $scope.minusCount = ()=>{
        $scope.count += 1;
    }
}
