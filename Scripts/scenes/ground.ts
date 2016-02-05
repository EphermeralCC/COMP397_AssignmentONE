//START SCENE
module scenes {
    export class GroundScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _groundSceneImage: createjs.Bitmap;
        private _takeKnifeButton: objects.Button;
        private _groundRunButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._groundSceneImage = new createjs.Bitmap("../../Assets/images/Ground.png");
            this.addChild(this._groundSceneImage);
        
            //add TakeKnife button to the MENU scene
            this._takeKnifeButton = new objects.Button("TakeKnife",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._takeKnifeButton);

            this._takeKnifeButton.on("click", this._takeKnifeButtonClick, this);
            
            //add GroundRun button to the MENU scene
            this._groundRunButton = new objects.Button("GroundRun",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._groundRunButton);

            this._groundRunButton.on("click", this._groundRunButtonClick, this);

            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //Continue click event handler
        private _takeKnifeButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.KNIFE_SCENE;
            changeScene();
        }

        private _groundRunButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.GROUND_RUN;
            changeScene();
        }
    }
}