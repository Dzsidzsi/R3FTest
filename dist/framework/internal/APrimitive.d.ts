import { AEntity } from "./AEntity";
import { BufferGeometry } from "three";
export declare abstract class APrimitive extends AEntity {
    constructor(guid: string);
    Geometry: BufferGeometry | null;
    StartIndex: number;
}
