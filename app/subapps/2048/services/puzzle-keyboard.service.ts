import {Position} from "../models/position.model";
import {Injectable} from "@angular/core";

/**
 * Created by Vasilenko on 12-Nov-16.
 */
@Injectable()
export class PuzzleKeyboardService {
    public static readonly UP: string = 'up';
    public static readonly RIGHT: string = 'right';
    public static readonly DOWN: string = 'down';
    public static readonly LEFT: string = 'left';

    vectors: Position[] = [new Position(-1, 0), new Position(1, 0)];
    vectorsPair: any = {};

    constructor() {
        this.addVector(PuzzleKeyboardService.LEFT, new Position(-1, 0));
        this.addVector(PuzzleKeyboardService.RIGHT, new Position(1, 0));
        this.addVector(PuzzleKeyboardService.UP, new Position(0, -1));
        this.addVector(PuzzleKeyboardService.DOWN, new Position(0, 1));
    }

    private addVector(key: string, vector: Position) {
        this.vectorsPair[key] = vector;
        this.vectors.push(vector);
    }

    static getEventKeyCode(keyCode: number): string {
        switch (keyCode) {
            case 37:
                return PuzzleKeyboardService.LEFT;
            case 38:
                return PuzzleKeyboardService.UP;
            case 39:
                return PuzzleKeyboardService.RIGHT;
            case 40:
                return PuzzleKeyboardService.DOWN;
            default:
                return null;
        }
    }

    static getEventSwipeCode(swipe: string): string {
        switch (swipe) {
            case "swipeleft":
                return PuzzleKeyboardService.LEFT;
            case "swipeup":
                return PuzzleKeyboardService.UP;
            case "swiperight":
                return PuzzleKeyboardService.RIGHT;
            case "swipedown":
                return PuzzleKeyboardService.DOWN;
            default:
                return null;
        }
    }

    getVectorByKey(key: string): Position {
        return this.vectorsPair[key];
    }

    getVectors(): Position[] {
        return this.vectors;
    }
}