var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var InsideMansion = (function (_super) {
        __extends(InsideMansion, _super);
        //CONSTRUCTOR --------------------------------------
        function InsideMansion() {
            _super.call(this);
        }
        //PUBLIC METHODS ----------------------------------------
        //Start Method
        InsideMansion.prototype.start = function () {
            //Add Image
            this._insideMansionImage = new createjs.Bitmap("../../Assets/images/insidemansion.png");
            this.addChild(this._insideMansionImage);
            //add upstairs button to the MENU scene
            this._upstairsButton = new objects.Button("GoUpstairsButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._upstairsButton);
            //add downstairs button
            this._upstairsButton.on("click", this._upstairsButtonClick, this);
            this._downstairsButton = new objects.Button("GoDownstairsButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._downstairsButton);
            this._downstairsButton.on("click", this._downstairsButtonClick, this);
            //add ground button
            this._groundButton = new objects.Button("StayGroundButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._groundButton);
            this._groundButton.on("click", this._groundButtonClick, this);
            stage.addChild(this);
        };
        //Start Scene updates here
        InsideMansion.prototype.update = function () {
        };
        //EVENT HANDLERS -------------------------------
        //GoUpstairsButton click event handler
        InsideMansion.prototype._upstairsButtonClick = function (event) {
            //Switch to GO_IN scene
            scene = config.Scene.GO_IN;
            changeScene();
        };
        //StayGroundButton click event handler
        InsideMansion.prototype._downstairsButtonClick = function (event) {
            //Switch to Explore scene
            scene = config.Scene.GO_IN;
            changeScene();
        };
        //GoDownstairsButton click event handler
        InsideMansion.prototype._groundButtonClick = function (event) {
            //Switch to Explore scene
            scene = config.Scene.GO_IN;
            changeScene();
        };
        return InsideMansion;
    })(objects.Scene);
    scenes.InsideMansion = InsideMansion;
})(scenes || (scenes = {}));
//# sourceMappingURL=insidemansion.js.map