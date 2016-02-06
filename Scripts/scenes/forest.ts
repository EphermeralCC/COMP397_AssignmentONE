//The Source file name: forest.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: The scene for the ForestOutside 
//Revision History: Complete

module scenes {
    export class ForestOutside extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _forestOutsideImage: createjs.Bitmap;
        private _goInCaveButton: objects.Button;
        private _continueWalkingButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._forestOutsideImage = new createjs.Bitmap("../../Assets/images/forestcavescene.png");
            this.addChild(this._forestOutsideImage);
        
            //add GoInCaveButton to the MENU scene
            this._goInCaveButton = new objects.Button("GoInCaveButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._goInCaveButton);
            
            this._goInCaveButton.on("click", this._goInCaveButtonClick, this);

            
            //add ContinueWalkingButton button
            this._continueWalkingButton = new objects.Button("ContinueWalkingButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._continueWalkingButton);

            this._continueWalkingButton.on("click", this._continueWalkingButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //GoInCaveButton click event handler
        private _goInCaveButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.CAVE;
            changeScene();
        }
        
        //ContinueWalkingButton click event handler
        private _continueWalkingButtonClick(event: createjs.MouseEvent){
            //Switch to LIGHT scene
            scene = config.Scene.LIGHT;
            changeScene();
        }
    }
}