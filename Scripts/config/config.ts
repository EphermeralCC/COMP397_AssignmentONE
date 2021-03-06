﻿module config {

    // Scene Constants
    export class Scene {
        public static INTRO: number = 0;
        public static START_SCENE: number = 1;
        public static GO_IN: number = 2;
        public static GO_EXPLORE: number = 3;
        public static GO_UPSTAIRS: number = 4;
        public static STAY_GROUND: number = 5;
        public static KNIFE_SCENE: number = 6;
        public static GROUND_RUN:number = 7;
        public static UPSTAIRS_SCENE:number = 8;
        public static UPSTAIRS_RIGHT:number = 9;
        public static UPSTAIRS_LEFT: number = 10;
        public static OUTSIDE: number = 11;
        public static FOLLOW_ROAD: number = 12;
        public static CAR_ZOMBIE: number = 13;
        public static IGNORE_CAR: number = 14;
        public static FOREST: number = 15;
        public static CAVE: number = 16;
        public static LIGHT: number = 17;
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