//The Source file name: followroad.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the FollowRoadScene 
//Revision History: Complete

module scenes {
    export class FollowRoadScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _followRoadImage: createjs.Bitmap;
        private _getInCarButton: objects.Button;
        private _ignoreTheCarButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._followRoadImage = new createjs.Bitmap(assets.getResult("outsideroad"));
            this.addChild(this._followRoadImage);
        
            //add GetInCarButton button to the MENU scene
            this._getInCarButton = new objects.Button("GetInCarButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._getInCarButton);
            
            this._getInCarButton.on("click", this._getInCarButtonClick, this);

            
            //add IgnoreTheCarButton button
            this._ignoreTheCarButton = new objects.Button("IgnoreTheCarButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._ignoreTheCarButton);

            this._ignoreTheCarButton.on("click", this._ignoreTheCarButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //GetInCarButton click event handler
        private _getInCarButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.CAR_ZOMBIE;
            changeScene();
        }
        
        //IgnoreTheCarButton click event handler
        private _ignoreTheCarButtonClick(event: createjs.MouseEvent){
            //Switch to Explore scene
            scene = config.Scene.IGNORE_CAR;
            changeScene();
        }
    }
}