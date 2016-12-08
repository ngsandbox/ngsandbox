import {Injectable} from "@angular/core";
import {Position} from "../models/position.model";
import "rxjs/add/operator/toPromise";
import {CommonUtils} from "../../../utils/common.util";
import {Tile} from "../models/tile.model";
import {PuzzleKeyboardService} from "./puzzle-keyboard.service";


interface ICalcPosition {
    nextPosition: Position;
    nextTail: Tile;
}


@Injectable()
export class Puzzle2048Service {

    public static readonly puzzle2048HighScoreKey: string = "Puzzle2048HighScore";
    public static readonly puzzle2048SizeKey: string = "Puzzle2048Size";

    tiles: Tile[] = [];
    size: number = 4; // Default size
    startingTileNumber: number = 2; // default starting tiles

    constructor(private keyboadrService: PuzzleKeyboardService){
        this.size = this.loadSize();
    }

    // Private things
    setStartingTiles(num: number) {
        this.startingTileNumber = num;
    };

    getSize = (): number => this.size;

    buildEmptyGameBoard() {
        this.tiles = [];
        this.size = this.loadSize();
        console.log("Board size: ", this.loadSize());
        this.forEach((pos: Position) => {
            this.setTileAt(pos.clone(), null);
        });
    }

    /**
     * Save the original state of tails for traversal
     */
    prepareTilesState() {
        this.forEach((pos: Position, tile: Tile) => {
            if (tile) {
                tile.prepareState();
            }
        });
    };

    /**
     * Due to the fact we calculate the next positions
     * in order, we need to specify the order in which
     * we calculate the next positions
     */
    traversalDirections(key: string) {
        var vector = this.keyboadrService.getVectorByKey(key);
        var positions: any = {x: [], y: []};
        for (var x = 0; x < this.size; x++) {
            positions.x.push(x);
            positions.y.push(x);
        }

        if (vector && vector.x > 0) {
            positions.x = positions.x.reverse();
        }
        if (vector && vector.y > 0) {
            positions.y = positions.y.reverse();
        }

        return positions;
    };


    /**
     * Calculate the next position for a tile
     */
    calculateNextPosition(cell: Position, key: string): ICalcPosition {
        var vector: Position = this.keyboadrService.getVectorByKey(key);
        var previous: Position;

        do {
            previous = cell;
            var vx = vector ? vector.x : 0;
            var vy = vector ? vector.y : 0;
            cell = new Position(previous.x + vx, previous.y + vy);
        } while (this.withinGrid(cell) && this.tileAvailable(cell));

        return {
            nextPosition: previous,
            nextTail: this.getTileAt(cell)
        };
    };


    /**
     * Is the position within the grid?
     */
    withinGrid = (pos: Position): boolean => pos.x >= 0 && pos.x < this.size && pos.y >= 0 && pos.y < this.size;

    /**
     * Is a cell available at a given position
     */
    tileAvailable = (pos: Position): boolean => this.withinGrid(pos) ? !this.getTileAt(pos) : false;

    /**
     * Build the initial starting position
     * with randomly placed tiles
     */
    buildStartingPosition() {
        for (var x = 0; x < this.startingTileNumber; x++) {
            this.randomlyInsertNewTile();
        }
    };

    /**
     * Check to see if there are any matches available
     */
    tileMatchesAvailable(): boolean {
        var totalSize = this.size * this.size;
        for (var i = 0; i < totalSize; i++) {
            var pos = this._positionToCoordinates(i);
            var tile = this.tiles[i];

            if (tile) {
                // Check all vectors
                for(let vector of this.keyboadrService.getVectors()){
                    var cell = new Position(pos.x + vector.x, pos.y + vector.y);
                    var other: Tile = this.getTileAt(cell);
                    if (other && other.getValue() === tile.getValue()) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    /**
     * Get a cell at a position
     */
    getTileAt(pos: Position): Tile {
        if (this.withinGrid(pos)) {
            var x = this._coordinatesToPosition(pos);
            return this.tiles[x];
        } else {
            return null;
        }
    };

    /**
     * Set a cell at position
     */
    setTileAt(pos: Position, tile: Tile) {
        if (this.withinGrid(pos)) {
            var xPos = this._coordinatesToPosition(pos);
            this.tiles[xPos] = tile;
        }
    };

    moveTile(tile: Tile, newPosition: Position) {
        var oldPos = tile.getPosition().clone();
        this.setTileAt(oldPos, null);
        this.setTileAt(newPosition, tile);
        tile.setPosition(newPosition);
    };

    /**
     * Run a callback for every cell
     * either on the grid or tiles
     */
    forEach(cb: (pos: Position, tile: Tile) => any) {
        var totalSize = this.size * this.size;
        for (var i = 0; i < totalSize; i++) {
            var pos = this._positionToCoordinates(i);
            cb(pos, this.tiles[i]);
        }
    };

    /**
     * Helper to convert x to x,y
     */
    private _positionToCoordinates(i: number): Position {
        var x = i % this.size,
            y = (i - x) / this.size;
        return new Position(x, y);
    };

    /**
     * Helper to convert coordinates to position
     */
    private _coordinatesToPosition = (pos: Position): number => (pos.y * this.size) + pos.x;

    /**
     * Insert a new tile
     */
    insertTile(tile: Tile) {
        var pos = this._coordinatesToPosition(tile.getPosition());
        this.tiles[pos] = tile;
    };

    newTile = (pos: Position, value: number): Tile => new Tile(pos, value);

    /**
     * Remove a tile
     */
    removeTile(pos: Position) {
        var index: number = this._coordinatesToPosition(pos);
        this.tiles[index] = null;
    };

    /**
     * Same position
     */
    samePositions = (a: Position, b: Position): boolean => a.x === b.x && a.y === b.y;

    /**
     * Get all the available tiles
     */
    availablePositions(): Position[] {
        var positions: Position[] = [];
        this.forEach((pos: Position) => {
            var pos: Position = pos.clone();
            var foundTile: Tile = this.getTileAt(pos);
            if (!foundTile) {
                positions.push(pos);
            }
        });

        return positions;
    };

    /**
     * Randomly insert a new tile
     */
    randomlyInsertNewTile() {
        var cell: Position = this.getRandomAvailablePosition();
        if (cell) {
            var tile: Tile = this.newTile(cell, 2);
            tile.setIsNew(true);
            this.insertTile(tile);
        }
    };

    /**
     * Get a randomly available cell from all the
     * currently available cells
     */
    getRandomAvailablePosition(): Position {
        var positions: Position[] = this.availablePositions();
        if (positions.length > 0) {
            return positions[Math.floor(Math.random() * positions.length)];
        }
        return null;
    };

    /**
     * Check to see there are still cells available
     */
    anyPositionsAvailable = (): boolean => this.availablePositions().length > 0;

    calcTileColumnssCount = (limit: number): number => (limit < 5) ? 6 :
        (limit < 7) ? 4 :
            (limit < 13) ? 3 :
                (limit < 25) ? 2 : 1;

    saveSize(sz: number) {
        CommonUtils.save(Puzzle2048Service.puzzle2048SizeKey, sz);
    }

    loadSize(): number {
        return CommonUtils.load(Puzzle2048Service.puzzle2048SizeKey, 4);
    }

    setHighScore(highScore: number) {
        CommonUtils.save(Puzzle2048Service.puzzle2048HighScoreKey, highScore);
    }

    getHighScore(): number {
        return CommonUtils.load(Puzzle2048Service.puzzle2048HighScoreKey, 0);
    }
}