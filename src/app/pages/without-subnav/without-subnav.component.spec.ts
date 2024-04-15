import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutSubnavComponent } from './without-subnav.component';

describe('WithoutSubnavComponent', () => {
  let component: WithoutSubnavComponent;
  let fixture: ComponentFixture<WithoutSubnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutSubnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithoutSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
