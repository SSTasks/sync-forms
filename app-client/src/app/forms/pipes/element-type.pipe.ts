import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {templateJitUrl} from '@angular/compiler';

@Pipe({
    name: 'type'
})
export class ElementTypePipe implements PipeTransform {
    templates: Templates[] = [
        {
        type: 'text',
        view:   '<mat-form-field class="t">\n' +
                '        <mat-label>Input</mat-label>\n' +
                '        <input matInput [disabled]="true">\n' +
                '    </mat-form-field>'
        }
    ];

    constructor(private sanitizer: DomSanitizer) { }

    transform(elem: any, args?: any): any {

        // this.templates.forEach( template => {
        //
        //     if (template.type === elem.type) {
        //         let view = template.view;
        //         console.log(view);
        //         return view;
        //     }
        // });

        let template: string;
        if (elem.type === 'text') {
            template = '<mat-form-field class="t">\n' +
                '        <mat-label>Input</mat-label>\n' +
                '        <input matInput [disabled]="true">\n' +
                '    </mat-form-field>';
        }

        return this.sanitizer.bypassSecurityTrustHtml(template);
    }
}


class Templates {
    type: string;
    view: string;
}
