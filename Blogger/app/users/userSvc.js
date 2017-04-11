(function(){
    function userSvc($http,$q){
        
       this.getUsers= function(){
         
           var dfd=$q.defer();
            $http.get('app/api/users.json')
            .then(function(response){
                
                dfd.resolve(response);
            })
            .catch(function(response){
                console.log(response);
                dfd.reject(response);
            });
           return dfd.promise;
       }
        
    }
    angular.module("product")
    .service("userSvc",["$http","$q",userSvc])
    
})();