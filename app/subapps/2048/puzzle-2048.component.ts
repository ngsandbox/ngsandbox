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
                event.preventDefault();
                self.game.move(key);
            }
        });
    }

    goUp(event: any) {
        event.preventDefault();
        this.game.move(PuzzleKeyboardService.UP);
    }

    goDown(event: any) {
        event.preventDefault();
        this.game.move(PuzzleKeyboardService.DOWN);
    }

    goLeft(event: any) {
        event.preventDefault();
        this.game.move(PuzzleKeyboardService.LEFT);
    }

    goRight(event: any) {
        event.preventDefault();
        this.game.move(PuzzleKeyboardService.RIGHT);
    }

    ngOnDestroy() {
        event.preventDefault();
        this.globalListenFunc();
    }

    onChangeSize(e: any) {
        if(e.value < this.game.gameSize){
            this.game.decSize();
        } else{
            this.game.incSize();
        }
    }
}