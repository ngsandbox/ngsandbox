import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sex'
})
export class GenderPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        let format = args!=null&&args.length>0?args[0]:"string";
        switch (format) {
            case "string":
                return value == 1 ? "Male" : "Female";
            default:
                return value == "Male" ? 1 : 2;
        }
    }
}