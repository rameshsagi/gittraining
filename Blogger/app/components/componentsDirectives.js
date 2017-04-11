//Directive Syntax

(
    function () {

        function nbBrandName() {
            return {
                template: '<a class="navbar-brand" href="#">{{company}}</a>',
                scope:{
                    company:"@"
                }
            };
        }

        function nbHeader(){
            return{
                templateUrl:'app/header/header.html',
                restrict:"A,E,C,M"
            };
        }

        function nbShow(){
            return{
                restrict:"A",
                link:function(x,element,attrs){
                    console.log(x);
                    console.log(element);
                    console.log(attrs);
                }
            }
        }

        function nbDatePicker(){
            return{
                restrict:"A",
                require:"ngModel",
                priority:1000,
                link: function(scope,element,attrs){
                    console.log("nbDatePicker");
                    console.log(scope);
                    element.datepicker();
                }
            }
        }
        function nbEnter(){
                return{
                    restrict:"A",
                    link:function(scope,element,attrs){
                        element.bind("keypress",function(e){
                            if(e.keyCode==13){
                                console.log(attrs["nbEnter"]);
                                console.log("Enter key pressed");
                                var methodName=attrs["nbEnter"];
                                scope.$eval(methodName);
                            }
                        });
                    }
                }
        };
//Isolated Scope based directives

        function nbCustomDate(){
            return{
                restrict:"A",
                scope:{},
                link: function(scope,element,attrs){
                     console.log("nbCustomDate");
                     scope.range="100";
                    element.datepicker();
                    console.log(scope);
                }
            }
        }
        function nbDetails(){
            return{
                restrict:"A",
                scope:{
                    heading:"@",
                    details:"=",
                    saveDetails:"&"
                },
                compile:function(element, attrs){
                    console.log(element);
                    console.log(attrs);
                    return{
                        pre:function(scope,element,attrs){

                        },
                        post:function(scope,element,attrs){

                        }
                    }
                },
                templateUrl:"app/components/nbDetails.html"
            }
        }

        function nbpassword(){
            return{
                restrict:"A",
                require:"ngModel",
                link:function(scope,element,attrs,ctrl){
                       ctrl.$formatters.unshift(checkValue);
                    ctrl.$parsers.unshift(checkValue);
                 
                    function checkValue(data){
                        console.log(data);
                       if(data.length>6 && data.length<10){
                            ctrl.$setValidity("nbpassword",true);
                       }
                       else{
                           ctrl.$setValidity("nbpassword",false);
                       }
//                         var reg = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
//                         if(reg.test(data)){
//                             ctrl.$setValidity("nbpassword",true);
//                         }
//                         else{
// ctrl.$setValidity("nbpassword",false);
//                         }
                        return data;
                    }

                }
            }
        }
        angular.module("components")
            .directive("nbBrandName", [nbBrandName])
            .directive("nbHeader",[nbHeader])
            .directive("nbShow",[nbShow])
            .directive("nbDatePicker",[nbDatePicker])
            .directive("nbEnter",[nbEnter])
            .directive("nbDetails",[nbDetails])
            .directive("nbCustomDate",[nbCustomDate])
            .directive("nbpassword",[nbpassword]);

    }
)();