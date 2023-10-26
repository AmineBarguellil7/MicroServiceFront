import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisdetailsComponent } from './avisdetails.component';

describe('AvisdetailsComponent', () => {
  let component: AvisdetailsComponent;
  let fixture: ComponentFixture<AvisdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
