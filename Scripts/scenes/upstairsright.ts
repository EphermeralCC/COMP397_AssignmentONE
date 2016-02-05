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
        
        //add startoverbutton
           this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //Continue click event handler
        private _restartButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}

