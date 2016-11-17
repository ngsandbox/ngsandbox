import {Component, OnInit, Renderer, OnDestroy} from "@angular/core";
import {Puzzle2048Service} from "./services/puzzle-2048.service";
import {GameService} from "./services/game-manager.service";
import {PuzzleKeyboardService} from "./services/puzzle-keyboard.service";

@Component({
    moduleId: module.id,
    selector: 'my-puzzle-2048',
    templateUrl: 'puzzle-2048.component.html',
    styleUrls: ['puzzle-2048.component.css'],
    providers: [Puzzle2048Service, GameService, PuzzleKeyboardService]
})
export class Puzzle2048Component implements OnInit, OnDestroy {
    globalListenFunc: Function;
    cardClasses: string = "col-lg-3";

    constructor(public game: GameService,
                private renderer: Renderer) {
    }

    newGame() {
        this.game.newGame();
    }

    ngOnInit() {
        var self = this;
        this.newGame();
        this.globalListenFunc = this.renderer.listenGlobal('document', 'keydown', (event: any) => {
            var key = PuzzleKeyboardService.getEventKeyCode(event.keyCode);
            if (key) {
                self.game.move(key);
            }
        });
    }

    goUp() {
        this.game.move(PuzzleKeyboardService.UP);
    }

    goDown() {
        this.game.move(PuzzleKeyboardService.DOWN);
    }

    goLeft() {
        this.game.move(PuzzleKeyboardService.LEFT);
    }

    goRight() {
        this.game.move(PuzzleKeyboardService.RIGHT);
    }

    ngOnDestroy() {
        this.globalListenFunc();
    }
}