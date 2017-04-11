//(function(){
//    function lookupSvc($http){
//        this.getCountries=function(){
//            return $http.get("app/api/countries.json");
//        };
//        
//    }
//    angular.module("lookup")
//    .service("lookupSvc",["$http",lookupSvc])
//    
//})();

(function () {
    function lookupSvc($http, $q) {
    /*   var countries = [{
                "name": "India",
                "code:": "In"
            },
            {
                "name": "United States",
                "code": "US"
            }];*/
       // var countries=[];
        this.getCountries = function () {

            //creating a deferred Object
            var dfd = $q.defer();
            /*if(countries.length>0){
                dfd.resolve(countries);
            }
            else{
                dfd.reject("NoCountries")
            }*/
            $http.get("app/api/countries.json")
                .then(function (res) {
                    dfd.resolve(res);
                })
                .catch(function (err) {
                    dfd.reject(err);
                })
                .finally(function () {
                    console.log("Done");
                });

            return dfd.promise;
            /* return $http.get("app/api/countries.json");*/
        };

    }
    angular.module("lookup")
        .service("lookupSvc", ["$http", "$q", lookupSvc])

})();