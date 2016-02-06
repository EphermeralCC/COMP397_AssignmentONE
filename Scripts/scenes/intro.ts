//The Source file name: intro.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the INTRO 
//Revision History: Complete

// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _startButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap(assets.getResult("Intro"));
            this.addChild(this._introImage);
            
            //add startButton to the Menu scene
            this._startButton = new objects.Button("startButton",
            config.Screen.CENTER_X,
            config.Screen.CENTER_Y + 80);
            this.addChild(this._startButton);
            
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //StartButton click event handler
        private _startButtonClick(event: createjs.MouseEvent){
            //Switch to START_SCENE
            scene = config.Scene.START_SCENE;
            changeScene();
        }
    }
}