export declare abstract class AEntity {
    readonly guid: string;
    constructor(guid: string);
    Parent: AEntity | null;
}
