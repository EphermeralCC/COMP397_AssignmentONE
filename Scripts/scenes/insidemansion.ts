//The Source file name: insidemansion.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the InsideMansion 
//Revision History: Complete

module scenes {
    export class InsideMansion extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _insideMansionImage: createjs.Bitmap;
        private _upstairsButton: objects.Button;
        private _groundButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._insideMansionImage = new createjs.Bitmap(assets.getResult("InsideMansion"));
            this.addChild(this._insideMansionImage);
        
            //add GoDownstairsButton button to the MENU scene
            this._upstairsButton = new objects.Button("GoUpstairsButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._upstairsButton);
            
            this._upstairsButton.on("click", this._upstairsButtonClick, this);

            
            //add StayGroundButton button to the MENU scene
            this._groundButton = new objects.Button("StayGroundButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._groundButton);

            this._groundButton.on("click", this._groundButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //GoUpstairsButton click event handler
        private _upstairsButtonClick(event: createjs.MouseEvent) {
            //Switch to UPSTAIRS_SCENE scene
            scene = config.Scene.UPSTAIRS_SCENE;
            changeScene();
        }
        
        //GoDownstairsButton click event handler
        private _groundButtonClick(event: createjs.MouseEvent){
            //Switch to STAY_GROUND scene
            scene = config.Scene.STAY_GROUND;
            changeScene();
        }
    }
}