//The Source file name: ignorecar.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the IgnoreCarScene 
//Revision History: Complete

module scenes {
    export class IgnoreCarScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _ignoreCarImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._ignoreCarImage = new createjs.Bitmap("../../Assets/images/ignorecar.png");
            this.addChild(this._ignoreCarImage);
        
            //add StartOverButton button to the MENU scene
           this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
           
            // StartOverButton Button event listener
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