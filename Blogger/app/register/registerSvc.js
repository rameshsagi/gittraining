//(function(){
//    function registerSvc(){
//        this.registerUser=function(userInfo){
//            console.log(userInfo);
//        };
//        
//    }
//    angular.module("register")
//    .service("registerSvc",[registerSvc])
//    
//})();

(function(){
    function registerSvc($http,$q){
        this.registerUser=function(userInfo){
            console.log(userInfo);
            var dfd= $q.defer();
            $http.post("/api/register",userInfo)
            .then(function(response){
                dfd.resolve(response);
            })
            .catch(function(response){
                dfd.reject(response);
            });

            return dfd.promise;
        };
        
    }
    angular.module("register")
    .service("registerSvc",["$http","$q",registerSvc])
    
})();