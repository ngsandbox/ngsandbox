/**
 * Created by Vasilenko on 12-Nov-16.
 */
import {Injectable} from '@angular/core';
import {Puzzle2048Service} from "./puzzle-2048.service";
import {Position} from "../models/position.model";
import {Tile} from "../models/tile.model";
import {GameState} from "../models/game-state.enum";
import {Utils} from "../../../utils";

@Injectable()
export class GameService {

    winningValue = 2048;
    tiles: Tile[];
    gameSize: number;
    gameState: number = 0;
    currentScore: number = 0;
    highScore: number = 0;
    colClass: String = "col-lg-3 col-md-3 col-sm-3 col-xs-3";

    constructor(private puzzleService: Puzzle2048Service) {
        this.reinit();
    }

    setSize(size: number) {
        this.gameSize = size;
        this.puzzleService.saveSize(size);
    }

    getHighScore(): number {
        return this.puzzleService.getHighScore();
    }

    reinit() {
        this.gameState = GameState.None;
        this.currentScore = 0;
        this.gameSize = this.puzzleService.loadSize();
        this.highScore = this.getHighScore();
        this.tiles = this.puzzleService.tiles;
        var limit = this.calcTileStyleLimit();
        this.colClass = Utils.format("col-lg-{0} col-md-{0} col-sm-{0} col-xs-{0}", limit);
    }


    newGame() {
        this.puzzleService.buildEmptyGameBoard();
        this.puzzleService.buildStartingPosition();
        this.reinit();
    }

    /**
     * The game loop
     *
     * Inside here, we'll run every 'interesting' event (interesting events are listed in the Keyboard service)
     * For every event, we'll:
     *  1. look up the appropriate vector
     *  2. find the furthest possible locations for each tile and the next tile over
     *  3. find any spots that can be 'merged'
     *    a. if we find a spot that can be merged:
     *      i. remove both tiles
     *      ii. add a new tile with the double value
     *    b. if we don't find a merge:
     *      i. move the original tile
     */
    move(key: string) {
        var self: GameService = this;
        if (self.gameState == GameState.GameOver) {
            return false;
        }
        var positions = this.puzzleService.traversalDirections(key);
        var hasMoved = false;

        // Update Grid
        this.puzzleService.prepareTilesState();
        positions.x.forEach((x: number) => {
            positions.y.forEach((y: number) => {
                var originalPosition: Position = new Position(x, y);
                var currentTile = self.puzzleService.getTileAt(originalPosition);

                if (currentTile) {
                    var cell = self.puzzleService.calculateNextPosition(currentTile.getPosition(), key),
                        nextTail = cell.nextTail,
                        nextPos = cell.nextPosition;

                    if (nextTail && nextTail.getValue() === currentTile.getValue() &&
                        nextTail.getValue() < this.winningValue && !nextTail.merged) {
                        // MERGE
                        currentTile.setValue(currentTile.getValue() * 2);
                        currentTile.merged = true;
                        self.puzzleService.moveTile(currentTile, nextTail.getPosition());
                        self.updateScore(self.currentScore + currentTile.getValue());
                        if (currentTile.getValue() >= self.winningValue) {
                            self.gameState = GameState.Won;
                        }

                        hasMoved = true; // we moved with a merge
                    } else {
                        self.puzzleService.moveTile(currentTile, nextPos);
                    }

                    if (!self.puzzleService.samePositions(originalPosition, nextPos)) {
                        hasMoved = true;
                    }
                }
            });
        });
        if (hasMoved) {
            this.puzzleService.randomlyInsertNewTile();
            if (!self.movesAvailable()) {
                self.gameState = GameState.GameOver;
            }
        }
    }

    movesAvailable = (): boolean => this.puzzleService.anyPositionsAvailable() || this.puzzleService.tileMatchesAvailable();

    updateScore(newScore: number) {
        this.currentScore = newScore;
        if (this.currentScore > this.getHighScore()) {
            this.highScore = newScore;
            this.puzzleService.setHighScore(newScore);
        }
    }

    decSize() {
        this.puzzleService.saveSize(this.decTileLimit(this.gameSize));
        console.log("Saved size: ", this.puzzleService.loadSize());
        this.newGame();
    }

    incSize() {
        this.puzzleService.saveSize(this.incTileLimit(this.gameSize));
        console.log("Saved size: ", this.puzzleService.loadSize());
        this.newGame();
    }

    calcTileStyleLimit(): number {
        if (this.gameSize < 3) {
            return 6;
        } else if (this.gameSize < 4) {
            return 4;
        } else if (this.gameSize < 5) {
            return 3;
        } else if (this.gameSize < 12) {
            return 2;
        }

        return 1;
    }

    private incTileLimit(value: number): number {
        switch (value){
            case 2 : return 3;
            case 3: return 4;
            case 4: return 6;
            default: return 12;
        }
    }

    private decTileLimit(value: number): number {
        switch (value){
            case 12 : return 6;
            case 6: return 4;
            case 4: return 3;
            default: return 2;
        }
    }
}