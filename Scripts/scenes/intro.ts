// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _startButton: objects.Button;
        //private _leftCaveButton: objects.Button;
        //private _rightCaveButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Intro.png");
            this.addChild(this._introImage);
            
            //add startButton to the Menu scene
            this._startButton = new objects.Button("startButton",
            config.Screen.CENTER_X,
            config.Screen.CENTER_Y + 80);
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
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //StartButton click event handler
        private _startButtonClick(event: createjs.MouseEvent){
            //Switch to StartScene
            scene = config.Scene.START_SCENE;
            changeScene();
        }
        
        // // LEFT_CAVE Button click event handler
        // private _leftCaveButtonClick(event: createjs.MouseEvent) {
        //     // Switch to the LEFT_CAVE Scene
        //     scene = config.Scene.LEFT_CAVE;
        //     changeScene();
        // }
        
        // LEFT_CAVE Button click event handler
        // private _rightCaveButtonClick(event: createjs.MouseEvent) {
        //     // Switch to the LEFT_CAVE Scene
        //     scene = config.Scene.RIGHT_CAVE;
        //     changeScene();
        // }
    }
}