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
            this._startSceneImage = new createjs.Bitmap("../../Assets/images/startScene.png");
            this.addChild(this._startSceneImage);
        
            //add GO_IN button to the MENU scene
            this._insideHouseButton = new objects.Button("GoInButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._insideHouseButton);

            this._insideHouseButton.on("click", this._insideHouseButtonClick, this);

            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //GO_IN Button click event handler
        private _insideHouseButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.GO_IN;
            changeScene();
        }
    }
}