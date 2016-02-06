//The Source file name: insidemansion.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the InsideMansion 
//Revision History: Complete
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
            this._insideMansionImage = new createjs.Bitmap(assets.getResult("insidemansion"));
            this.addChild(this._insideMansionImage);
            //add GoDownstairsButton button to the MENU scene
            this._upstairsButton = new objects.Button("GoUpstairsButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._upstairsButton);
            this._upstairsButton.on("click", this._upstairsButtonClick, this);
            //add StayGroundButton button to the MENU scene
            this._groundButton = new objects.Button("StayGroundButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
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
            //Switch to UPSTAIRS_SCENE scene
            scene = config.Scene.UPSTAIRS_SCENE;
            changeScene();
        };
        //GoDownstairsButton click event handler
        InsideMansion.prototype._groundButtonClick = function (event) {
            //Switch to STAY_GROUND scene
            scene = config.Scene.STAY_GROUND;
            changeScene();
        };
        return InsideMansion;
    })(objects.Scene);
    scenes.InsideMansion = InsideMansion;
})(scenes || (scenes = {}));
//# sourceMappingURL=insidemansion.js.map