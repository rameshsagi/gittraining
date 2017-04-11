(function () {
    function lookupFac($http, $q) {

        return {
            getCountries: function () {

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
            }

        }
    };


    angular.module("lookup")
        .factory("lookupFac", ["$http", "$q", lookupFac])

})();