import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadsOfDetailComponent } from './loads-of-detail.component';

describe('LoadsOfDetailComponent', () => {
  let component: LoadsOfDetailComponent;
  let fixture: ComponentFixture<LoadsOfDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadsOfDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadsOfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
