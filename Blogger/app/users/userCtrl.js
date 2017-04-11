(
    function () {

        function userCtrl($scope, userSvc) {
            $scope.userCount = 4;
            userSvc.getUsers()
                .then(function (response) {
                    $scope.users = response.data.users;
                })
                .catch(function (response) {
                    console.log(response);
                });

            $scope.showMore = function () {
                $scope.userCount += 10;
            };
            $scope.editUser = function(user){
                $scope.title ="Edit "+user.name;
                $scope.userEdit =user;
            };
            $scope.save= function(){
                console.log($scope.userEdit);
            };
        }
        angular.module("user")
            .controller("userCtrl", ["$scope", "userSvc", userCtrl]);
    }

)();