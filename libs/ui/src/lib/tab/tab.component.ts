import {
  booleanAttribute,
  Component,
  ContentChildren,
  inject,
  Input,
  QueryList,
  Type, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabBodyComponent } from './tab-body/tab-body.component';
import { TabHeaderRowComponent } from './header-row/tab-header-row.component';

@Component({
  selector: 'ui-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {

  @ContentChildren(TabHeaderComponent) headers!: QueryList<TabHeaderComponent>;
  @ContentChildren(TabBodyComponent) bodies!: QueryList<TabBodyComponent>;
  @ViewChild('headerRow') headerRow!: TabHeaderRowComponent;

  @Input({ transform: booleanAttribute }) withRouting: boolean = false;

  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

  tabBody!: Type<TabBodyComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabContent!: Array<any>;

  ngAfterViewInit() {
    if (this.withRouting && this.bodies.length > 1) {
      throw Error('Tabs with routing must have only one body!');
    }
    this.headers.forEach(
      (header, index: number) => {
        header.selectHeader.subscribe(
          () => {
            this.headerRow.paginate(undefined, header.elementRef)
            this.tabBody = TabBodyComponent;
            if (this.withRouting) {
              if (this.bodies.length > 0) {
                this.tabContent = this.viewContainerRef.createEmbeddedView(this.bodies.get(0)!.templateRef).rootNodes;
              } else if (this.bodies.get(0)) {
                this.tabContent = this.viewContainerRef.createEmbeddedView(this.bodies.get(0)!.templateRef).rootNodes;
              }
            } else {
              this.viewContainerRef.clear();
              if (this.bodies.get(index)) {
                this.tabContent = this.viewContainerRef.createEmbeddedView(this.bodies.get(index)!.templateRef).rootNodes;
              }
            }
          }
        );
      }
    );
  }


}
