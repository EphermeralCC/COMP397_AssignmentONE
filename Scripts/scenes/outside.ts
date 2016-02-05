module scenes {
    export class OutsideMansion extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES --------------------------------
        private _outsideMansionImage: createjs.Bitmap;
        private _roadButton: objects.Button;
        private _forestButton: objects.Button;
    
        //CONSTRUCTOR --------------------------------------
        constructor() {
            super();
        }
    
        //PUBLIC METHODS ----------------------------------------
    
        //Start Method
        public start(): void {
            //Add Image
            this._outsideMansionImage = new createjs.Bitmap("../../Assets/images/outsideMansion.png");
            this.addChild(this._outsideMansionImage);
        
            //add upstairs button to the MENU scene
            this._forestButton = new objects.Button("ExploreForestButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._forestButton);
            
            this._forestButton.on("click", this._forestButtonButtonClick, this);
            
            
            //add ground button
            this._roadButton = new objects.Button("FollowRoadButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._roadButton);

            this._roadButton.on("click", this._roadButtonClick, this);
            
            stage.addChild(this);
        }
    
        //Start Scene updates here
        public update(): void {

        }
        
        //EVENT HANDLERS -------------------------------
        
        //GoUpstairsButton click event handler
        private _forestButtonButtonClick(event: createjs.MouseEvent) {
            //Switch to GO_IN scene
            scene = config.Scene.FOREST;
            changeScene();
        }
        
        //GoDownstairsButton click event handler
        private _roadButtonClick(event: createjs.MouseEvent){
            //Switch to Explore scene
            scene = config.Scene.FOLLOW_ROAD;
            changeScene();
        }
    }
}