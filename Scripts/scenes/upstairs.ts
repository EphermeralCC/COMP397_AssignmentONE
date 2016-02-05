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
            this._upstairsSceneImage = new createjs.Bitmap("../../Assets/images/UpstairsScene.png");
            this.addChild(this._upstairsSceneImage);
        
            //add TakeKnife button to the MENU scene
            this._leftButton = new objects.Button("UpstairsLeftButton",
                config.Screen.CENTER_X - 200,
                config.Screen.CENTER_Y);
            this.addChild(this._leftButton);

            this._leftButton.on("click", this._leftButtonButtonClick, this);
            
            //add GroundRun button to the MENU scene
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
        
        //Continue click event handler
        private _leftButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.KNIFE_SCENE;
            changeScene();
        }

        private _rightButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.GROUND_RUN;
            changeScene();
        }
    }
}