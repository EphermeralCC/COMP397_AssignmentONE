var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var OutsideMansion = (function (_super) {
        __extends(OutsideMansion, _super);
        //CONSTRUCTOR --------------------------------------
        function OutsideMansion() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        OutsideMansion.prototype.start = function () {
            //Add Image
            this._outsideMansionImage = new createjs.Bitmap("../../Assets/images/outsideMansion.png");
            this.addChild(this._outsideMansionImage);
            //add upstairs button to the MENU scene
            this._forestButton = new objects.Button("ExploreForestButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._forestButton);
            this._forestButton.on("click", this._forestButtonButtonClick, this);
            //add ground button
            this._roadButton = new objects.Button("FollowRoadButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._roadButton);
            this._roadButton.on("click", this._roadButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        OutsideMansion.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //GoUpstairsButton click event handler
        OutsideMansion.prototype._forestButtonButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.FOREST;
            changeScene();
        };
        //GoDownstairsButton click event handler
        OutsideMansion.prototype._roadButtonClick = function (event) {
            //Switch to Explore scene
            scene = config.Scene.FOLLOW_ROAD;
            changeScene();
        };
        return OutsideMansion;
    })(objects.Scene);
    scenes.OutsideMansion = OutsideMansion;
})(scenes || (scenes = {}));
//# sourceMappingURL=outside.js.map