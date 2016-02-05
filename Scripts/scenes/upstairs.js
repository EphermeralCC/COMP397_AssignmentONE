var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//START SCENE
var scenes;
(function (scenes) {
    var UpstairScene = (function (_super) {
        __extends(UpstairScene, _super);
        //CONSTRUCTOR --------------------------------------
        function UpstairScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        UpstairScene.prototype.start = function () {
            //Add Image
            this._upstairsSceneImage = new createjs.Bitmap("../../Assets/images/UpstairsScene.png");
            this.addChild(this._upstairsSceneImage);
            //add TakeKnife button to the MENU scene
            this._leftButton = new objects.Button("UpstairsLeftButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._leftButtonButtonClick, this);
            //add GroundRun button to the MENU scene
            this._rightButton = new objects.Button("UpstairsRightButton", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._rightButtonButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        UpstairScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //Continue click event handler
        UpstairScene.prototype._leftButtonButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.KNIFE_SCENE;
            changeScene();
        };
        UpstairScene.prototype._rightButtonButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.UPSTAIRS_RIGHT;
            changeScene();
        };
        return UpstairScene;
    })(objects.Scene);
    scenes.UpstairScene = UpstairScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=upstairs.js.map