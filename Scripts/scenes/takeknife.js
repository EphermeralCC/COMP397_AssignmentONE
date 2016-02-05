var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var TakeKnifeScene = (function (_super) {
        __extends(TakeKnifeScene, _super);
        //CONSTRUCTOR --------------------------------------
        function TakeKnifeScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        TakeKnifeScene.prototype.start = function () {
            //Add Image
            this._knifeSceneImage = new createjs.Bitmap("../../Assets/images/KnifeScene.png");
            this.addChild(this._knifeSceneImage);
            //add upstairs button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        TakeKnifeScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //StartOverButton click event handler
        TakeKnifeScene.prototype._startOverButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return TakeKnifeScene;
    })(objects.Scene);
    scenes.TakeKnifeScene = TakeKnifeScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=takeknife.js.map