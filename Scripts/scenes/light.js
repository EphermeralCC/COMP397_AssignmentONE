//The Source file name: light.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the ForestLightScene 
//Revision History: Complete
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var ForestLightScene = (function (_super) {
        __extends(ForestLightScene, _super);
        //CONSTRUCTOR --------------------------------------
        function ForestLightScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        ForestLightScene.prototype.start = function () {
            //Add Image
            this._forestLightSceneImage = new createjs.Bitmap(assets.getResult("forestlight"));
            this.addChild(this._forestLightSceneImage);
            //add StartOverButton button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        ForestLightScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //StartOverButton click event handler
        ForestLightScene.prototype._startOverButtonClick = function (event) {
            //Switch to INTRO scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return ForestLightScene;
    })(objects.Scene);
    scenes.ForestLightScene = ForestLightScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=light.js.map