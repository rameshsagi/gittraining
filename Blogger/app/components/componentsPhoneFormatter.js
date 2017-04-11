(
    function () {
        function phoneFormatter() {
            return function check(input,criteria) {
                var phone = input.toString();
                if(criteria=="US"){
                    return formatUSPhone(phone);
                }
                else if(criteria=="IN"){
                   return formatIndianPhone(phone);
                }
                return phone;
            }
        }

        function formatUSPhone(input){
            return "+1 "+ 
            input.substring(0,3)
            +"-"+input.substring(3,6)+
            "-"+input.substring(6,10);
        }
        function formatIndianPhone(input){
 return "+91 "+ 
            input.substring(0,5)
            +"-"+input.substring(5,10);
        }
        angular.module("components")
            .filter("PhoneFormatter", [phoneFormatter])
    }

)();