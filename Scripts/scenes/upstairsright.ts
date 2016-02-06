//The Source file name: upstairsright.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the UpstairsRightScene 
//Revision History: Complete

//START SCENE
module scenes {
    export class UpstairsRightScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _bedroomSceneImage: createjs.Bitmap;
        private _restartButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._bedroomSceneImage = new createjs.Bitmap("../../Assets/images/BedroomScene.png");
            this.addChild(this._bedroomSceneImage);
        
        //add RestartButton
           this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
           
            // RestartButton Button event listener
            this._restartButton.on("click", this._restartButtonButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //RestartButton click event handler
        private _restartButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to INTRO scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}

