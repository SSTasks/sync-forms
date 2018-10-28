import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'type'
})
export class ElementTypePipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(elem: any, args?: any): any {
        let template: string;

        if (elem.type === 'input-text') {
            template = '<mat-form-field class="t">\n' +
                '        <mat-label>Input</mat-label>\n' +
                '        <input matInput [disabled]="true">\n' +
                '    </mat-form-field>';
        }

        return this.sanitizer.bypassSecurityTrustHtml(template);
    }
}
