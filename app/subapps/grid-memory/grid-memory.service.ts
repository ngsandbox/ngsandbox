import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {FileInfo} from "./models/file-info.model";
import "rxjs/add/operator/toPromise";
import {Utils} from "./../../utils";

@Injectable()
export class GridMemoryService {

    public static readonly gridMemSecondsKey: string = "GridMemorySeconds"; 
    public static readonly gridMemLimitKey: string = "GridMemoryLimit"; 
    files: Promise<FileInfo[]>;
    questionTemplate: string = "Where is {0}?";

    constructor(private http: Http) {
        //this.files = this.getFiles();
    }

    getFiles(limit: number): Promise<FileInfo[]> {
        return this.http.get("/components/memory/filesInfo.json")
            .toPromise()
            .then(response => this.proceedFiles(<FileInfo[]>response.json(), limit))
            .catch(GridMemoryService.handleError);
    }

    private proceedFiles(files: FileInfo[], limit: number): FileInfo[] {
        let result: FileInfo[] = [];
        let start = Utils.getRandomInt(0, files.length - limit * 2);
        let end = Utils.getRandomInt(start + limit * 2, files.length);
        let rest = files.slice(start, end);
        //console.log({ start: start, end: end, rest: rest, length: files.length, limit: limit });
        while (rest.length > 1 && result.length < limit) {
            let i: number = Utils.getRandomInt(0, rest.length - 1);
            let fileInfo: FileInfo = rest[i];
            fileInfo.path = "/components/memory/" + fileInfo.path;
            fileInfo.name = fileInfo.langs[0].value;
            rest.splice(i, 1);
            result.push(fileInfo);
            //console.log({ index: i, length: rest.length, fileInfo: fileInfo });
        }

        return result;
    }

    calcCardColsCount(limit: number) {
        return (limit < 5) ? 6 :
            (limit < 7) ? 4 :
                (limit < 13) ? 3 :
                    (limit < 25) ? 2 : 1;
    }

    setTimeout(sec: number): void {
        Utils.save(GridMemoryService.gridMemSecondsKey, sec);
    }

    getTimeout(): number {
        return Utils.load(GridMemoryService.gridMemSecondsKey, 10);
    }

    setLimit(limit: number) {
        Utils.save(GridMemoryService.gridMemLimitKey, limit);
    }

    getLimit(): number {
        return Utils.load(GridMemoryService.gridMemLimitKey, 6);
    }

    private static handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}