(
    function () {
        function initCap() {
            return function check(input) {
                var filteredInput = "";
                if (input.length > 0) {
                    var firstChar = input.substring(0, 1).toUpperCase();
                    filteredInput = input.slice(1, input.length);
                    return firstChar + filteredInput;
                }
                return input;
            }
        }
        angular.module("components")
            .filter("Initcap", [initCap])
    }

)();