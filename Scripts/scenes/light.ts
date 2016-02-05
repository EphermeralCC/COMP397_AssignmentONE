module scenes {
    export class ForestLightScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _forestLightSceneImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._forestLightSceneImage = new createjs.Bitmap("../../Assets/images/forestlight.png");
            this.addChild(this._forestLightSceneImage);
        
            //add upstairs button to the MENU scene
           this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X + 200,
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
            //Switch to GO_IN scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
    }
}