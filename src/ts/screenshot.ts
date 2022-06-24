import * as PIXI from 'pixi.js';

import { Game } from './game';

export class Screenshot { 

    pixi: PIXI.Application;
    game: Game

    constructor(x: number, y: number, width: number, height: number, pixi: PIXI.Application, game: Game) {

        this.pixi = pixi
        this.game = game

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "C":
                console.log('keydown');
                this.takeScreenshot()
                break;
            case "D":
                console.log('delet');
                this.deleteScreenshot()
                break;
        }
    }

    public takeScreenshot() {
        let renderer: PIXI.Renderer = this.pixi.renderer as PIXI.Renderer
        let extract = new PIXI.Extract(renderer)
        
        let base64String = extract.base64(this.pixi.stage)
        
        console.log(base64String)
        
        let sprite = PIXI.Sprite.from(base64String)
        sprite.x = 100
        sprite.y = 100
        sprite.width = 300
        sprite.height = 200
        this.pixi.stage.addChild(sprite)
    }

    deleteScreenshot() {
        this.pixi.stage.removeChild(this.pixi.stage.children[1])
    }
}
