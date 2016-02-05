var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//START SCENE
var scenes;
(function (scenes) {
    var UpstairsLeftScene = (function (_super) {
        __extends(UpstairsLeftScene, _super);
        //CONSTRUCTOR --------------------------------------
        function UpstairsLeftScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        UpstairsLeftScene.prototype.start = function () {
            //Add Image
            this._washroomSceneImage = new createjs.Bitmap("../../Assets/images/UpstairsLeftDeadScene.png");
            this.addChild(this._washroomSceneImage);
            //add startoverbutton
            this._startOverScene = new objects.Button("StartOverButton", config.Screen.CENTER_X + 190, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverScene);
            // START_OVER Button event listener
            this._startOverScene.on("click", this._startOverSceneButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        UpstairsLeftScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //Continue click event handler
        UpstairsLeftScene.prototype._startOverSceneButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return UpstairsLeftScene;
    })(objects.Scene);
    scenes.UpstairsLeftScene = UpstairsLeftScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=upstairsleft.js.map