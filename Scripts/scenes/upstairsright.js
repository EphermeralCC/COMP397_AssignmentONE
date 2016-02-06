//The Source file name: upstairsright.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the UpstairsRightScene 
//Revision History: Complete
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//START SCENE
var scenes;
(function (scenes) {
    var UpstairsRightScene = (function (_super) {
        __extends(UpstairsRightScene, _super);
        //CONSTRUCTOR --------------------------------------
        function UpstairsRightScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        UpstairsRightScene.prototype.start = function () {
            //Add Image
            this._bedroomSceneImage = new createjs.Bitmap(assets.getResult("BedroomScene"));
            this.addChild(this._bedroomSceneImage);
            //add RestartButton
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
            // RestartButton Button event listener
            this._restartButton.on("click", this._restartButtonButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        UpstairsRightScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //RestartButton click event handler
        UpstairsRightScene.prototype._restartButtonButtonClick = function (event) {
            //Switch to INTRO scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return UpstairsRightScene;
    })(objects.Scene);
    scenes.UpstairsRightScene = UpstairsRightScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=upstairsright.js.map