//The Source file name: ground.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the GroundScene 
//Revision History: Complete
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//START SCENE
var scenes;
(function (scenes) {
    var GroundScene = (function (_super) {
        __extends(GroundScene, _super);
        //CONSTRUCTOR --------------------------------------
        function GroundScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        GroundScene.prototype.start = function () {
            //Add Image
            this._groundSceneImage = new createjs.Bitmap("../../Assets/images/Ground.png");
            this.addChild(this._groundSceneImage);
            //add TakeKnife button to the MENU scene
            this._takeKnifeButton = new objects.Button("TakeKnife", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._takeKnifeButton);
            this._takeKnifeButton.on("click", this._takeKnifeButtonClick, this);
            //add GroundRun button to the MENU scene
            this._groundRunButton = new objects.Button("GroundRun", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._groundRunButton);
            this._groundRunButton.on("click", this._groundRunButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        GroundScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //TakeKnife button click event handler
        GroundScene.prototype._takeKnifeButtonClick = function (event) {
            //Switch to KNIFE_SCENE scene
            scene = config.Scene.KNIFE_SCENE;
            changeScene();
        };
        //GroundRun button click event handler
        GroundScene.prototype._groundRunButtonClick = function (event) {
            //Switch to GROUND_RUN scene
            scene = config.Scene.GROUND_RUN;
            changeScene();
        };
        return GroundScene;
    })(objects.Scene);
    scenes.GroundScene = GroundScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=ground.js.map