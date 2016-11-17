export class Lang {
    name: string;
    value: string;
}
export class FileInfo {
    path: string;
    name: string;
    langs: Lang[];
    inAction: boolean = false;
    isFront: boolean = true;
}