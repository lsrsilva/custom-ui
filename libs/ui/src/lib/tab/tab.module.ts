import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabBodyComponent } from './tab-body/tab-body.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline';
import { TabHeaderRowComponent } from './header-row/tab-header-row.component';

@NgModule({
  declarations: [
    TabComponent,
    TabHeaderComponent,
    TabBodyComponent,
    TabGroupComponent,
    TabHeaderRowComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroChevronLeft, heroChevronRight }),
  ],
  exports: [
    TabComponent,
    TabHeaderComponent,
    TabBodyComponent,
    TabGroupComponent,
  ],
})
export class TabModule {}
