import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ScreenshotService } from '../../services/screenshot.service';


@Component({
  selector: 'app-form-screenshot',
  templateUrl: './form-screenshot.component.html',
  styleUrls: ['../constructor-page.component.scss']
})
export class FormScreenshotComponent implements OnInit {
   @Input() public form;
   @ViewChild('screenshot') screenshot: ElementRef;
   
   constructor (private screenshotService: ScreenshotService ) {  }

   ngOnInit() { }

   ngAfterViewInit() {
      this.screenshotService.HTMLElement = this.screenshot.nativeElement;
   }
}
