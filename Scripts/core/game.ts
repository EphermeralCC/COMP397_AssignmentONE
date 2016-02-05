/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro;
var startScene: scenes.StartScene;
var insideMansion: scenes.InsideMansion;
var ground: scenes.GroundScene;
var knife: scenes.TakeKnifeScene;
var groundrun:scenes.GroundRunScene;
var upstairs: scenes.UpstairScene;
var bedroom: scenes.UpstairsRightScene;


function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
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
            
    }

    console.log(currentScene.numChildren);
}