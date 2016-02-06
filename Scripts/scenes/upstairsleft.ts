//The Source file name: upstairsleft.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the UpstairsLeftScene 
//Revision History: Complete

//START SCENE
module scenes {
    export class UpstairsLeftScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _washroomSceneImage: createjs.Bitmap;
        private _startOverScene: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._washroomSceneImage = new createjs.Bitmap(assets.getResult("UpstairsLeftDeadScene"));
            this.addChild(this._washroomSceneImage);
        
        //add StartOverButton
           this._startOverScene = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X + 190,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverScene);
           
            // StartOverButton Button event listener
            this._startOverScene.on("click", this._startOverSceneButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //StartOverButton click event handler
        private _startOverSceneButtonClick(event: createjs.MouseEvent) {
            //Switch to INTRO scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}

