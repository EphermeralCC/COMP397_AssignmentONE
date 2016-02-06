//The Source file name: cave.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the CaveCollapseScene 
//Revision History: Complete
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var CaveCollapseScene = (function (_super) {
        __extends(CaveCollapseScene, _super);
        //CONSTRUCTOR --------------------------------------
        function CaveCollapseScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        CaveCollapseScene.prototype.start = function () {
            //Add Image
            this._caveCollapseSceneImage = new createjs.Bitmap("../../Assets/images/rockslide.png");
            this.addChild(this._caveCollapseSceneImage);
            //add StartOverButton button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // StartOverButton Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        CaveCollapseScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //StartOverButton click event handler
        CaveCollapseScene.prototype._startOverButtonClick = function (event) {
            //Switch to INTRO scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return CaveCollapseScene;
    })(objects.Scene);
    scenes.CaveCollapseScene = CaveCollapseScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=cave.js.map