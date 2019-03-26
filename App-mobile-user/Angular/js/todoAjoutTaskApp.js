var todoApp = angular.module('todoApp', []);
todoApp.controller('ctrlTodo', ['$scope', function($scope) {

    //initialisation
    $scope.init = function() {
        $scope.tabOfTasks = [];
        $scope.checked = [];
    }

    $scope.styleChecked = {
        "text-decoration" : "line-through"
    }

    //Ajout d'une task. Affiche une erreur si déjà en double.
    $scope.addTask = function() {
        if($scope.tabOfTasks.indexOf($scope.taskName) == -1) {
            $scope.tabOfTasks.push($scope.taskName);  
            var index = $scope.tabOfTasks.indexOf($scope.taskName); 
            $scope.checked[index] = false;
            $scope.taskName = "";
            $scope.addTaskError = "";
        } else {
            $scope.addTaskError = "Erreur : tâche déjà existante.";
        }
    };

    //Supprime une tâche en particulier  
    $scope.delTask = function(index) {
        console.log( $scope.tabOfTasks);
        console.log($scope.checked);
        $scope.tabOfTasks.splice(index,1);
        $scope.checked.splice(index,1);
        console.log( $scope.tabOfTasks);
        console.log($scope.checked);
    }

    //Supprime les tâches "finies"
    $scope.delCheckedTask = function() {
        for(var i = $scope.checked.length; i > 0 ; i--) {
            var tempon = i-1;
            console.log(tempon);
            if($scope.checked[tempon]) {
                $scope.delTask(tempon);
            }
        }
    }

    //barre une tache faite.
    $scope.taskDone = function(aTask) {
        var index = $scope.tabOfTasks.indexOf(aTask);
        if($scope.checked[index]) {
            return $scope.styleChecked;
        }         
        else {
            return "";
        }
    }

    $scope.init();
}]);

  