import {Utils} from "../../../utils";
import {Position} from "./position.model";
/**
 * Created by Vasilenko on 12-Nov-16.
 */
export class Tile {
    id: string = "";
    merged: boolean = false;
    isNew: boolean = false;
    position: Position;
    origPosition: Position;
    bgStatus: string = "";

    getValue = (): number => this.value;

    constructor(position: Position, private value: number) {
        this.id = Utils.genUuid();
        this.setPosition(position);
        this.merged = false;
    }

    prepareState() {
        this.origPosition = this.position.clone();
        this.merged = false;
        this.isNew = false;
    }

    setMergedBy(arr: Tile[]) {
        var self = this;
        arr.forEach(function (tile: Tile) {
            tile.merged = true;
            tile.setPosition(self.getPosition());
        });
    }

    setValue(newVal: number) {
        this.value = newVal;
        this.recalcBgClass();
    }

    setPosition(newPosition: Position) {
        this.position = newPosition.clone();
    }

    getPosition(): Position {
        return this.position.clone();
    }

    setIsNew(isnew: boolean) {
        this.isNew = isnew;
    }

    private recalcBgClass() {
        this.bgStatus = this.value < 64 ? "" ://64
            this.value < 256 ? "bg-info" ://256
                this.value < 512 ? "bg-warning" :
                    this.value < 1024 ? "bg-success" :
                        this.value < 2048 ? "bg-primary" : "bg-error";
    }
}