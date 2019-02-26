var app= angular.module("ListeApp", []);

app.controller('TodoCtrl', ['$scope', function($scope){

    // On crée un tableau t'objets appelé taskSet
    $scope.taskSet=[{
        taskName:"Faire le menage",
        done:false
    }];
    
    $scope.addTask=function()
    {
        
    if($scope.taskName!="")
    {
        $scope.taskSet.push({
            taskName:$scope.taskName,
            done:false
        });

        // Vide le champ
        $scope.taskName="";
    }
    }
    $scope.finishTask=function(ta){
        console.log(ta);
        ta.done = !ta.done;
        if(ta.done==true)
            $scope.styleTa = {
                "text-decoration":"line-through"
            }
        else{
            $scope.styleTa = {
                "text-decoration":"none"
            }
        }
        //$scope.index=$scope.taskSet.findIndex(taskSet => taskSet.taskName === $scope.ta);

       


        
    }
}]);