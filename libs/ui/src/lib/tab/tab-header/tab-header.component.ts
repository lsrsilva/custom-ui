import { Component, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'ui-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrl: './tab-header.component.scss',
})
export class TabHeaderComponent {

  @Input() id!: string;
  @Output() selectHeader: EventEmitter<any> = new EventEmitter<any>();

  elementRef: ElementRef = inject(ElementRef);

  @HostListener('click')
  private click() {
    this.selectHeader.emit();
  }

  ngOnInit() {
    this.setUpId();
  }

  private setUpId() {
    if (!this.id) {
      this.id = `tab-header-${uniqueId++}`;
    }
    return this.id;
  }

}
