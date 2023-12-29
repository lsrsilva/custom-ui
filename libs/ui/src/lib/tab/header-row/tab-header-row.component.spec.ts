import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabHeaderRowComponent } from './tab-header-row.component';

describe('HeaderRowComponent', () => {
  let component: TabHeaderRowComponent;
  let fixture: ComponentFixture<TabHeaderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabHeaderRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
