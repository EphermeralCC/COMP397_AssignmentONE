//The Source file name: forest.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the ForestOutside 
//Revision History: Complete
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var ForestOutside = (function (_super) {
        __extends(ForestOutside, _super);
        //CONSTRUCTOR --------------------------------------
        function ForestOutside() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        ForestOutside.prototype.start = function () {
            //Add Image
            this._forestOutsideImage = new createjs.Bitmap(assets.getResult("forestcavescene"));
            this.addChild(this._forestOutsideImage);
            //add GoInCaveButton to the MENU scene
            this._goInCaveButton = new objects.Button("GoInCaveButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._goInCaveButton);
            this._goInCaveButton.on("click", this._goInCaveButtonClick, this);
            //add ContinueWalkingButton button
            this._continueWalkingButton = new objects.Button("ContinueWalkingButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._continueWalkingButton);
            this._continueWalkingButton.on("click", this._continueWalkingButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        ForestOutside.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //GoInCaveButton click event handler
        ForestOutside.prototype._goInCaveButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.CAVE;
            changeScene();
        };
        //ContinueWalkingButton click event handler
        ForestOutside.prototype._continueWalkingButtonClick = function (event) {
            //Switch to LIGHT scene
            scene = config.Scene.LIGHT;
            changeScene();
        };
        return ForestOutside;
    })(objects.Scene);
    scenes.ForestOutside = ForestOutside;
})(scenes || (scenes = {}));
//# sourceMappingURL=forest.js.map