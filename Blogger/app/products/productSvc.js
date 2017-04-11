(function(){
    function productSvc($http,$q){

        var cartItems =[];
        function productMapper(input){
            var output={};
            output.name =input.name;
            output.shortDescription=input.shortDescription?input.shortDescription:input.longDescription;
            output.salePrice =input.salePrice;
            output.thumbnailImage = input.thumbnailImage;
            return output;
        };

        function checkData(parameter){
             var data= localStorage.getItem(parameter);
             if(data){
                 return data;
             }
             else{
                 return [];
             }
        }
        
       this.searchProducts= function(parameter){
          // var url ="http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=jeans"
            var productArray = checkData(parameter);
           var dfd=$q.defer();
            if(productArray.length>0){
                dfd.resolve(productArray);
            }
            else{
          
            $http.get('/WM/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query='+parameter)
            .then(function(response){
                
                 angular.forEach(response.data.items,function(item){
                     productArray.push(productMapper(item));
                 });
                localStorage.setItem(parameter.toLowerCase(),productArray);
                
                 console.log(productArray);
                dfd.resolve(productArray);
            })
            .catch(function(response){
                console.log(response);
                dfd.reject(response);
            });
            }
           return dfd.promise;
       };
       this.addToCart = function(item){
           cartItems.push(item);
       };
       this.getProductFromCart = function(){
           return cartItems;
       };
       this.removeItemsFromCart = function(item){

       };
        
    }
    angular.module("product")
    .service("productSvc",["$http","$q",productSvc])
    
})();
