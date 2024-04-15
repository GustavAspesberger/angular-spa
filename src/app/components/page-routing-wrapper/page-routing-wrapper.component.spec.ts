import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRoutingWrapperComponent } from './page-routing-wrapper.component';

describe('PageRoutingWrapperComponent', () => {
  let component: PageRoutingWrapperComponent;
  let fixture: ComponentFixture<PageRoutingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRoutingWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRoutingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
