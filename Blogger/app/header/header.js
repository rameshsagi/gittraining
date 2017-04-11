(function(){
    
    angular.module("header",[]);
    
    angular.module("header")
    .config([function(){
        console.log("I am the header");
    }])
    .run([function(){
        console.log("I am the run function of header");
    }]);
    
    
})();
