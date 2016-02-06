//The Source file name: game.ts 
//Author’s name: Christine Cho
//Last Modified by: Christine Cho
//Date last Modified: 02/05/2016
//Program description: Controls everything that happens in the game 
//Revision History: Complete
/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var startScene;
var insideMansion;
var ground;
var knife;
var groundrun;
var upstairs;
var bedroom;
var washroom;
var outside;
var followroad;
var zombiecar;
var ignorecar;
var forest;
var cave;
var light;
var assetData = [
    { id: "BedroomScene", src: "../../Assets/images/BedroomScene.png" },
    { id: "StartOverButton", src: "../../Assets/images/StartOverButton.png" },
    { id: "ContinueWalkingButton", src: "../../Assets/images/ContinueWalkingButton.png" },
    { id: "ExploreForestButton", src: "../../Assets/images/ExploreForestButton.png" },
    { id: "ExploreOutsideButton", src: "../../Assets/images/ExploreOutsideButton.png" },
    { id: "FollowRoadButton", src: "../../Assets/images/FollowRoadButton.png" },
    { id: "forestcavescene", src: "../../Assets/images/forestcavescene.png" },
    { id: "forestlight", src: "../../Assets/images/forestlight.png" },
    { id: "GetInCarButton", src: "../../Assets/images/GetInCarButton.png" },
    { id: "GoDownstairsButton", src: "../../Assets/images/GoDownstairsButton.png" },
    { id: "GoInButton", src: "../../Assets/images/GoInButton.png" },
    { id: "GoInCaveButton", src: "../../Assets/images/GoInCaveButton.png" },
    { id: "GoUpstairsButton", src: "../../Assets/images/GoUpstairsButton.png" },
    { id: "Ground", src: "../../Assets/images/Ground.png" },
    { id: "GroundRun", src: "../../Assets/images/GroundRun.png" },
    { id: "GroundRunScene", src: "../../Assets/images/GroundRunScene.png" },
    { id: "ignorecar", src: "../../Assets/images/ignorecar.png" },
    { id: "IgnoreTheCarButton", src: "../../Assets/images/IgnoreTheCarButton.png" },
    { id: "InsideMansion", src: "../../Assets/images/InsideMansion.png" },
    { id: "Intro", src: "../../Assets/images/Intro.png" },
    { id: "KnifeScene", src: "../../Assets/images/KnifeScene.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "outsideMansion", src: "../../Assets/images/outsideMansion.png" },
    { id: "outsideroad", src: "../../Assets/images/outsideroad.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "rockslide", src: "../../Assets/images/rockslide.png" },
    { id: "startButton", src: "../../Assets/images/startButton.png" },
    { id: "startScene", src: "../../Assets/images/startScene.png" },
    { id: "StayGroundButton", src: "../../Assets/images/StayGroundButton.png" },
    { id: "TakeKnife", src: "../../Assets/images/TakeKnife.png" },
    { id: "UpstairsLeftButton", src: "../../Assets/images/UpstairsLeftButton.png" },
    { id: "UpstairsLeftDeadScene", src: "../../Assets/images/UpstairsLeftDeadScene.png" },
    { id: "UpstairsLeftScene", src: "../../Assets/images/UpstairsLeftScene.png" },
    { id: "UpstairsRightButton", src: "../../Assets/images/UpstairsRightButton.png" },
    { id: "UpstairsScene", src: "../../Assets/images/UpstairsScene.png" },
    { id: "zombiecar", src: "../../Assets/images/zombiecar.png" }
];
function preLoad() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.START_SCENE:
            //Show Start Scene
            stage.removeAllChildren();
            startScene = new scenes.StartScene();
            currentScene = startScene;
            console.log("Starting startScene Scene");
            break;
        case config.Scene.GO_IN:
            //Show Start Scene
            stage.removeAllChildren();
            insideMansion = new scenes.InsideMansion();
            currentScene = insideMansion;
            console.log("Starting Inside Mansion Scene");
            break;
        case config.Scene.STAY_GROUND:
            //Show Start Scene
            stage.removeAllChildren();
            ground = new scenes.GroundScene();
            currentScene = ground;
            console.log("Starting Stay On Ground Scene");
            break;
        case config.Scene.KNIFE_SCENE:
            //Show Start Scene
            stage.removeAllChildren();
            knife = new scenes.TakeKnifeScene();
            currentScene = knife;
            console.log("Starting  Knife Scene");
            break;
        case config.Scene.GROUND_RUN:
            //Show Start Scene
            stage.removeAllChildren();
            groundrun = new scenes.GroundRunScene();
            currentScene = groundrun;
            console.log("Starting Ground Run Scene");
            break;
        case config.Scene.UPSTAIRS_SCENE:
            //Show Start Scene
            stage.removeAllChildren();
            upstairs = new scenes.UpstairScene();
            currentScene = upstairs;
            console.log("Starting Upstairs Scene");
            break;
        case config.Scene.UPSTAIRS_RIGHT:
            //Show Start Scene
            stage.removeAllChildren();
            bedroom = new scenes.UpstairsRightScene();
            currentScene = bedroom;
            console.log("Starting Bedroom Scene");
            break;
        case config.Scene.UPSTAIRS_LEFT:
            //Show Start Scene
            stage.removeAllChildren();
            washroom = new scenes.UpstairsLeftScene();
            currentScene = washroom;
            console.log("Starting Washroom Scene");
            break;
        case config.Scene.OUTSIDE:
            //Show Start Scene
            stage.removeAllChildren();
            outside = new scenes.OutsideMansion();
            currentScene = outside;
            console.log("Starting Outside Scene");
            break;
        case config.Scene.FOLLOW_ROAD:
            //Show Start Scene
            stage.removeAllChildren();
            followroad = new scenes.FollowRoadScene();
            currentScene = followroad;
            console.log("Starting FollowRoadScene Scene");
            break;
        case config.Scene.CAR_ZOMBIE:
            //Show Start Scene
            stage.removeAllChildren();
            zombiecar = new scenes.ZombieCarScene();
            currentScene = zombiecar;
            console.log("Starting zombiecar Scene");
            break;
        case config.Scene.IGNORE_CAR:
            //Show Start Scene
            stage.removeAllChildren();
            ignorecar = new scenes.IgnoreCarScene();
            currentScene = ignorecar;
            console.log("Starting IgnoreCarScene Scene");
            break;
        case config.Scene.FOREST:
            //Show Start Scene
            stage.removeAllChildren();
            forest = new scenes.ForestOutside();
            currentScene = forest;
            console.log("Starting ForestOutside Scene");
            break;
        case config.Scene.CAVE:
            //Show Start Scene
            stage.removeAllChildren();
            cave = new scenes.CaveCollapseScene();
            currentScene = cave;
            console.log("Starting CaveCollapseScene Scene");
            break;
        case config.Scene.LIGHT:
            //Show Start Scene
            stage.removeAllChildren();
            light = new scenes.ForestLightScene();
            currentScene = light;
            console.log("Starting ForestLightScene Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map