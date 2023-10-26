import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisitemComponent } from './avisitem.component';

describe('AvisitemComponent', () => {
  let component: AvisitemComponent;
  let fixture: ComponentFixture<AvisitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
