var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var FollowRoadScene = (function (_super) {
        __extends(FollowRoadScene, _super);
        //CONSTRUCTOR --------------------------------------
        function FollowRoadScene() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        FollowRoadScene.prototype.start = function () {
            //Add Image
            this._followRoadImage = new createjs.Bitmap("../../Assets/images/outsideroad.png");
            this.addChild(this._followRoadImage);
            //add upstairs button to the MENU scene
            this._getInCarButton = new objects.Button("GetInCarButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._getInCarButton);
            this._getInCarButton.on("click", this._getInCarButtonClick, this);
            //add ground button
            this._ignoreTheCarButton = new objects.Button("IgnoreTheCarButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._ignoreTheCarButton);
            this._ignoreTheCarButton.on("click", this._ignoreTheCarButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        FollowRoadScene.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //GoUpstairsButton click event handler
        FollowRoadScene.prototype._getInCarButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.CAR_ZOMBIE;
            changeScene();
        };
        //GoDownstairsButton click event handler
        FollowRoadScene.prototype._ignoreTheCarButtonClick = function (event) {
            //Switch to Explore scene
            scene = config.Scene.IGNORE_CAR;
            changeScene();
        };
        return FollowRoadScene;
    })(objects.Scene);
    scenes.FollowRoadScene = FollowRoadScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=followroad.js.map