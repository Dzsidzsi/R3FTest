import { Vector3 } from "three";
export default class Wall {
    guid: string;
    start: Vector3;
    end: Vector3;
    thickness: number;
    height: number;
    constructor(guid: string | undefined, start: Vector3, end: Vector3, thickness: number, height: number);
    toJson(): string;
}
