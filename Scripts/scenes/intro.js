var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        //private _leftCaveButton: objects.Button;
        //private _rightCaveButton: objects.Button;
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Intro.png");
            this.addChild(this._introImage);
            //add startButton to the Menu scene
            this._startButton = new objects.Button("startButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            // // add the LEFT_CAVE button to the MENU scene
            // this._leftCaveButton = new objects.Button(
            //     "LeftCaveButton",
            //     config.Screen.CENTER_X - 100,
            //     config.Screen.CENTER_Y + 180);
            // this.addChild(this._leftCaveButton);
            // // LEFT_CAVE Button event listener
            // this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            // this._rightCaveButton = new objects.Button(
            //     "RightCaveButton",
            //     config.Screen.CENTER_X + 100,
            //     config.Screen.CENTER_Y + 180);
            // this.addChild(this._rightCaveButton);
            // // LEFT_CAVE Button event listener
            // this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //StartButton click event handler
        Intro.prototype._startButtonClick = function (event) {
            //Switch to StartScene
            scene = config.Scene.START_SCENE;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map