import { Scene } from "../scene.js";

export class Loading extends Scene {
    constructor(game) {
        super(game);
        this.game = game;
        this.loadedAt = 0;
        
    }

    init() {
        super.init();
        this.loadedAt = 0;
    };

    update(time) {
        if (this.loadedAt == 0) {
            this.loadedAt = time;
        }
        if (this.loadedAt != 0 && (time - this.loadedAt) > 500) {
            console.log("loaded")
            this.finish(Scene.LOADED);
        }
    }

    render(time) {
        this.update(time);
        this.game.screen.fill("#000");
        this.game.screen.print({text: "Загрузка", x: 500, y: 300, size: 36, color:"#fff"});
        super.render(time);
    }
}