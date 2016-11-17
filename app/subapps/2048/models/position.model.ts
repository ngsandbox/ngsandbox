/**
 * Created by Vasilenko on 12-Nov-16.
 */
export class Position {
    constructor(public x: number, public y: number) {
    }

    clone = (): Position => new Position(this.x, this.y);
}