var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.START_SCENE = 1;
        Scene.GO_IN = 2;
        Scene.GO_EXPLORE = 3;
        Scene.GO_UPSTAIRS = 4;
        Scene.STAY_GROUND = 5;
        Scene.KNIFE_SCENE = 6;
        Scene.GROUND_RUN = 7;
        Scene.UPSTAIRS_SCENE = 8;
        Scene.UPSTAIRS_RIGHT = 9;
        Scene.UPSTAIRS_LEFT = 10;
        Scene.OUTSIDE = 11;
        Scene.FOLLOW_ROAD = 12;
        Scene.CAR_ZOMBIE = 13;
        Scene.IGNORE_CAR = 14;
        Scene.FOREST = 15;
        Scene.CAVE = 16;
        Scene.LIGHT = 17;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map