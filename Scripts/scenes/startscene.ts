//The Source file name: startscene.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the StartScene 
//Revision History: Complete

//START SCENE
module scenes {
    export class StartScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _startSceneImage: createjs.Bitmap;
        private _insideHouseButton: objects.Button;
        private _outsideHouseButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._startSceneImage = new createjs.Bitmap(assets.getResult("startscene"));
            this.addChild(this._startSceneImage);
        
            //add GO_IN button to the MENU scene
            this._insideHouseButton = new objects.Button("GoInButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._insideHouseButton);

            this._insideHouseButton.on("click", this._insideHouseButtonClick, this);
            
            //add Explore Outside button to Menu scene
            this._outsideHouseButton = new objects.Button("ExploreOutsideButton",
            config.Screen.CENTER_X + 100,
            config.Screen.CENTER_Y + 180);
            this.addChild(this._outsideHouseButton);
            
            this._outsideHouseButton.on("click", this._outsideHouseButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //GoInButton click event handler
        private _insideHouseButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.GO_IN;
            changeScene();
        }
        
        //ExploreOutsideButton click event handler
        private _outsideHouseButtonClick(event: createjs.MouseEvent){
            //Switch to Explore scene
            scene = config.Scene.OUTSIDE;
            changeScene();
        }
    }
}