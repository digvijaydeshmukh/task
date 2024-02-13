import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'keyVal',
    pure:true,
    standalone:true
})

export class KeyValPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        console.log(args)
        return "hhh"
    }
}