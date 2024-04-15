import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSubnavComponent } from './with-subnav.component';

describe('WithSubnavComponent', () => {
  let component: WithSubnavComponent;
  let fixture: ComponentFixture<WithSubnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithSubnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
