import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrl: './tab-body.component.scss',
})
export class TabBodyComponent {

  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;

}
