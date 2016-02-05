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
            this._washroomSceneImage = new createjs.Bitmap("../../Assets/images/UpstairsLeftDeadScene.png");
            this.addChild(this._washroomSceneImage);
        
        //add startoverbutton
           this._startOverScene = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X + 190,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverScene);
           
            // START_OVER Button event listener
            this._startOverScene.on("click", this._startOverSceneButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //Continue click event handler
        private _startOverSceneButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}

