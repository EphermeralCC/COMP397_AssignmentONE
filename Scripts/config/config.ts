module config {

    // Scene Constants
    export class Scene {
        public static INTRO: number = 0;
        // public static LEFT_CAVE: number = 4;
        // public static RIGHT_CAVE: number = 3;
        public static START_SCENE: number = 1;
        public static GO_IN: number = 2;
        public static GO_EXPLORE: number = 3;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}