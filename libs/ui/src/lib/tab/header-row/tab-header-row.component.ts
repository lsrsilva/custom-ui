import { Component, ElementRef, HostListener, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';

enum PaginateDirection {
  LEFT = -1,
  RIGHT = 1,
}

@Component({
  selector: 'ui-tab-header-row',
  templateUrl: './tab-header-row.component.html',
  styleUrl: './tab-header-row.component.scss'
})
export class TabHeaderRowComponent {

  @ViewChild('headerContainer') headerContainer!: ElementRef;

  @ViewChild('headerContent') headerContent!: ElementRef;

  protected showPaginationControls: WritableSignal<boolean> = signal(false);
  public disableNext: WritableSignal<boolean> = signal(false);
  public disablePrev: WritableSignal<boolean> = signal(false);

  protected direction = PaginateDirection;

  ngAfterViewInit() {
    this.needToShowControls();
    this.checkIfCanScroll();
    this.headerContent.nativeElement.addEventListener('scroll', () => this.checkIfCanScroll())
  }

  ngOnDestroy() {
    this.headerContent.nativeElement.removeEventListener('scroll');
  }

  @HostListener('window:resize')
  private windowResize() {
    this.needToShowControls();
  }

  @HostListener('wheel', ['$event'])
  private scrollByWheel(event: WheelEvent) {
    this.headerContent.nativeElement.scrollTo({
      left: this.headerContent.nativeElement.scrollLeft + event.deltaY,
      behavior: 'smooth'
    });
  }

  private checkIfCanScroll() {
    const headerContainerElement = this.headerContent.nativeElement;
    this.disablePrev.set(headerContainerElement.scrollLeft <= 0);
    this.disableNext.set(headerContainerElement.scrollLeft + headerContainerElement.offsetWidth >= headerContainerElement.scrollWidth);
  }

  private needToShowControls() {
    this.showPaginationControls.set(this.headerContent.nativeElement.scrollWidth > this.headerContainer.nativeElement.offsetWidth);
  }

  paginate(direction: number | undefined, selectTab?: ElementRef) {
    if (this.showPaginationControls()) {
      if (!selectTab && direction) {
        const headerContainerElement = this.headerContainer.nativeElement;
        const headerContentElement = this.headerContent.nativeElement;

        const scrollAmount = direction * (headerContainerElement.offsetWidth / 2) + headerContentElement.scrollLeft;
        this.headerContent.nativeElement.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      } else if (selectTab) {
        selectTab.nativeElement.scrollIntoView({ inline: 'center', behavior: 'smooth' });
      }
    }

  }

}
