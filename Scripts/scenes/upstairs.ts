//The Source file name: upstairs.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the UpstairScene 
//Revision History: Complete

//START SCENE
module scenes {
    export class UpstairScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _upstairsSceneImage: createjs.Bitmap;
        private _leftButton: objects.Button;
        private _rightButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._upstairsSceneImage = new createjs.Bitmap(assets.getResult("UpstairsScene"));
            this.addChild(this._upstairsSceneImage);
        
            //add UpstairsLeftButton button to the MENU scene
            this._leftButton = new objects.Button("UpstairsLeftButton",
                config.Screen.CENTER_X - 200,
                config.Screen.CENTER_Y);
            this.addChild(this._leftButton);

            this._leftButton.on("click", this._leftButtonButtonClick, this);
            
            //add UpstairsRightButton button to the MENU scene
            this._rightButton = new objects.Button("UpstairsRightButton",
                config.Screen.CENTER_X + 180,
                config.Screen.CENTER_Y);
            this.addChild(this._rightButton);

            this._rightButton.on("click", this._rightButtonButtonClick, this);

            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //UpstairsLeftButton click event handler
        private _leftButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to UPSTAIRS_LEFT scene
            scene = config.Scene.UPSTAIRS_LEFT;
            changeScene();
        }
        
        //UpstairsRightButton click event handler
        private _rightButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to UPSTAIRS_RIGHT scene
            scene = config.Scene.UPSTAIRS_RIGHT;
            changeScene();
        }
    }
}