var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var IgnoreCarScene = (function (_super) {
        __extends(IgnoreCarScene, _super);
        //CONSTRUCTOR --------------------------------------
        function IgnoreCarScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        IgnoreCarScene.prototype.start = function () {
            //Add Image
            this._ignoreCarImage = new createjs.Bitmap("../../Assets/images/ignorecar.png");
            this.addChild(this._ignoreCarImage);
            //add upstairs button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        IgnoreCarScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //StartOverButton click event handler
        IgnoreCarScene.prototype._startOverButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return IgnoreCarScene;
    })(objects.Scene);
    scenes.IgnoreCarScene = IgnoreCarScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=ignorecar.js.map