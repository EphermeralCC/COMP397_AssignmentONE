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
            this._insideMansionImage = new createjs.Bitmap("../../Assets/images/insidemansion.png");
            this.addChild(this._insideMansionImage);
        
            //add upstairs button to the MENU scene
            this._upstairsButton = new objects.Button("GoUpstairsButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._upstairsButton);
            
            this._upstairsButton.on("click", this._upstairsButtonClick, this);
            
            
            //add ground button
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
            //Switch to GO_IN scene
            scene = config.Scene.GO_IN;
            changeScene();
        }
        
        //GoDownstairsButton click event handler
        private _groundButtonClick(event: createjs.MouseEvent){
            //Switch to Explore scene
            scene = config.Scene.STAY_GROUND;
            changeScene();
        }
    }
}