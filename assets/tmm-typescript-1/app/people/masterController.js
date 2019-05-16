var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var MasterAction = (function () {
            function MasterAction(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
            return MasterAction;
        }());
        virtdog.MasterAction = MasterAction;
        var MasterController = (function () {
            function MasterController($rootScope, eventNames) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.speciesName = 'Homo Sapiens';
                this.masterActions = [];
                this.masterObjects = [];
                this.throwSomething = function (object) {
                    return _this.$rootScope.$broadcast(_this.eventNames.masterThrow, object);
                };
                this.feedTheDog = function (food) {
                    return _this.$rootScope.$broadcast(_this.eventNames.masterFeed, food);
                };
                this.familiarName = 'Dillon';
                this.initializeLists();
            }
            // --------------------- private stuff down here -------------------------------
            MasterController.prototype.initializeLists = function () {
                this.masterActions.push(new MasterAction('Throw Object', this.throwSomething));
                this.masterActions.push(new MasterAction('Feed', this.feedTheDog));
                var dogObject = new virtdog.DogObject('Babe Ruth autographed baseball', true, false);
                dogObject.bounces = true;
                dogObject.expensive = true;
                dogObject.irreplaceable = true;
                dogObject.monetaryValue = 100000;
                dogObject.chewLimit = 15;
                this.masterObjects.push(dogObject);
                dogObject = new virtdog.DogObject('ball', true, false);
                dogObject.bounces = true;
                dogObject.chewLimit = 100;
                this.masterObjects.push(dogObject);
                dogObject = new virtdog.DogObject('Frisbee', true, false);
                dogObject.flies = true;
                dogObject.chewLimit = 20;
                this.masterObjects.push(dogObject);
                this.masterObjects.push(new virtdog.DogObject('stick', true, false));
                this.masterObjects.push(new virtdog.DogObject('dog food', true, true));
                this.masterObjects.push(new virtdog.DogObject('table scraps', true, true));
            };
            MasterController.$inject = ['$rootScope', 'eventNames'];
            return MasterController;
        }());
        virtdog.MasterController = MasterController;
        virtdog.getModulePeople().controller('masterController', MasterController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc3RlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBMkRoQjtBQTNERCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0EyRHhCO0lBM0RpQixXQUFBLE9BQU8sRUFBQyxDQUFDO1FBQ3pCO1lBQ0Usc0JBQ1MsVUFBa0IsRUFDbEIsVUFBNkM7Z0JBRDdDLGVBQVUsR0FBVixVQUFVLENBQVE7Z0JBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1DO1lBQ2xELENBQUM7WUFDUCxtQkFBQztRQUFELENBQUMsQUFMRCxJQUtDO1FBTFksb0JBQVksZUFLeEIsQ0FBQTtRQUVEO1lBV0UsMEJBQW9CLFVBQWdDLEVBQVUsVUFBc0I7Z0JBWHRGLGlCQWlEQztnQkF0Q3FCLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBVjdFLGdCQUFXLEdBQVcsY0FBYyxDQUFDO2dCQUtyQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7Z0JBRW5DLGtCQUFhLEdBQWdCLEVBQUUsQ0FBQztnQkFRaEMsbUJBQWMsR0FBRyxVQUFDLE1BQU07b0JBQzdCLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2dCQUEvRCxDQUErRCxDQUFDO2dCQUUzRCxlQUFVLEdBQUcsVUFBQyxJQUFJO29CQUN2QixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztnQkFBNUQsQ0FBNEQsQ0FBQztnQkFSN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixDQUFDO1lBUUQsZ0ZBQWdGO1lBQ3hFLDBDQUFlLEdBQXZCO2dCQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUVuRSxJQUFJLFNBQVMsR0FBRyxJQUFJLGlCQUFTLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3RSxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDekIsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixTQUFTLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDakMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVuQyxTQUFTLEdBQUcsSUFBSSxpQkFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRW5DLFNBQVMsR0FBRyxJQUFJLGlCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBdENNLHdCQUFPLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7WUF1Q2hELHVCQUFDO1FBQUQsQ0FBQyxBQWpERCxJQWlEQztRQWpEWSx3QkFBZ0IsbUJBaUQ1QixDQUFBO1FBQ0QsdUJBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUEzRGlCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQTJEeEI7QUFBRCxDQUFDLEVBM0RTLE9BQU8sS0FBUCxPQUFPLFFBMkRoQiJ9