var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var ForestOutside = (function (_super) {
        __extends(ForestOutside, _super);
        //CONSTRUCTOR --------------------------------------
        function ForestOutside() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        ForestOutside.prototype.start = function () {
            //Add Image
            this._forestOutsideImage = new createjs.Bitmap("../../Assets/images/forestcavescene.png");
            this.addChild(this._forestOutsideImage);
            //add upstairs button to the MENU scene
            this._goInCaveButton = new objects.Button("GoInCaveButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._goInCaveButton);
            this._goInCaveButton.on("click", this._goInCaveButtonClick, this);
            //add ground button
            this._continueWalkingButton = new objects.Button("ContinueWalkingButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._continueWalkingButton);
            this._continueWalkingButton.on("click", this._continueWalkingButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        ForestOutside.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //GoUpstairsButton click event handler
        ForestOutside.prototype._goInCaveButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.CAVE;
            changeScene();
        };
        //GoDownstairsButton click event handler
        ForestOutside.prototype._continueWalkingButtonClick = function (event) {
            //Switch to Explore scene
            scene = config.Scene.LIGHT;
            changeScene();
        };
        return ForestOutside;
    })(objects.Scene);
    scenes.ForestOutside = ForestOutside;
})(scenes || (scenes = {}));
//# sourceMappingURL=forest.js.map