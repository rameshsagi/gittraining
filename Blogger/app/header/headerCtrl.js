(
    function () {
        /*controller syntax
        1. controller function will take two params
          controller Name
          callbackFunction
        */
        function headerCtrlFn($scope,$rootScope){
            $scope.brandName="Blogger.io";
            $scope.navItems=["Home","Product","Register","Login","Users"];
       
            $scope.productCount=0;
            $scope.totalPrice =0;
            $rootScope.$on("PROUDCT-ADDED",function(evet,args){
                console.log(args);
                 $scope.totalPrice +=args.item.salePrice;
                 $scope.productCount++;
            });
 }
        
        angular.module("header")
        .controller("headerCtrl",["$scope","$rootScope",headerCtrlFn]);
        
        
    })();