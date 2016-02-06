//The Source file name: startscene.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the StartScene 
//Revision History: Complete
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//START SCENE
var scenes;
(function (scenes) {
    var StartScene = (function (_super) {
        __extends(StartScene, _super);
        //CONSTRUCTOR --------------------------------------
        function StartScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        StartScene.prototype.start = function () {
            //Add Image
            this._startSceneImage = new createjs.Bitmap("../../Assets/images/startScene.png");
            this.addChild(this._startSceneImage);
            //add GO_IN button to the MENU scene
            this._insideHouseButton = new objects.Button("GoInButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._insideHouseButton);
            this._insideHouseButton.on("click", this._insideHouseButtonClick, this);
            //add Explore Outside button to Menu scene
            this._outsideHouseButton = new objects.Button("ExploreOutsideButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._outsideHouseButton);
            this._outsideHouseButton.on("click", this._outsideHouseButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        StartScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //GoInButton click event handler
        StartScene.prototype._insideHouseButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.GO_IN;
            changeScene();
        };
        //ExploreOutsideButton click event handler
        StartScene.prototype._outsideHouseButtonClick = function (event) {
            //Switch to Explore scene
            scene = config.Scene.OUTSIDE;
            changeScene();
        };
        return StartScene;
    })(objects.Scene);
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=startscene.js.map