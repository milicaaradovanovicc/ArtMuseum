import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-offcanvas-config',
  templateUrl: './offcanvas.component.html',
  providers: [NgbOffcanvasConfig, NgbOffcanvas],
})
export class OffcanvasComponent {
  // constructor(
  //   config: NgbOffcanvasConfig,
  //   private offcanvasService: NgbOffcanvas
  // ) {
  //   // customize default values of offcanvas used by this component tree
  //   config.position = 'end';
  //   config.backdropClass = 'bg-info';
  //   config.keyboard = false;
  // }
  // open(content: TemplateRef<any>) {
  //   this.offcanvasService.open(content);
  // }
}
