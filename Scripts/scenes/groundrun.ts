//The Source file name: groundrun.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the GroundRunScene 
//Revision History: Complete

module scenes {
    export class GroundRunScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _groundRunSceneImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._groundRunSceneImage = new createjs.Bitmap(assets.getResult("GroundRunScene"));
            this.addChild(this._groundRunSceneImage);
        
            //add StartOverButton button to the MENU scene
           this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
           
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //StartOverButton click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            //Switch to INTRO scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
    }
}