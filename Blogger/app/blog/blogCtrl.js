(
    function(){
        
        function blogCtrl($http){
            this.postBlog = function(data){
                $http.post("")
            }
        }
        angular.module("blog")
        .controller("blogCtrl",["$http",blogCtrl]);
    }

)();