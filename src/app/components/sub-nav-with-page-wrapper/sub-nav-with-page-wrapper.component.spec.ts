import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavWithPageWrapperComponent } from './sub-nav-with-page-wrapper.component';

describe('SubNavWithPageWrapperComponent', () => {
  let component: SubNavWithPageWrapperComponent;
  let fixture: ComponentFixture<SubNavWithPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavWithPageWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubNavWithPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
