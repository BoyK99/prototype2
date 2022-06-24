// Import PIXI
import * as PIXI from 'pixi.js';

// Import Images
import backGround from '../images/broodjes.png';

// Import Classes
import { Screenshot } from './screenshot';

export class Game{
    // Globals
    private pixiWidth = 800;
    private pixiHeight = 500;
    private backColor = 0xAAAAAA;

    private pixi : PIXI.Application;
    private loader : PIXI.Loader;
    private background : PIXI.Sprite;

    public screenshot : Screenshot;
    
    constructor(){
        // Create PIXI Stage
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight, backgroundColor: this.backColor});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // Create Loader
        this.loader = new PIXI.Loader();
        this.loader
            .add('backGround', backGround);
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){
        // Add background to stage
        this.background = new PIXI.Sprite(this.loader.resources["backGround"].texture!);
        this.background.scale.set(0.62);
        this.pixi.stage.addChild(this.background);

        //
        this.screenshot = new Screenshot(-153,-418,120,282, this.pixi, this)
        
        this.pixi.ticker.add((delta) => this.update(5));
    }

    // Update function
    update(delta: number){ 

    }
}

// Start game
new Game();
