import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyOrderComponent } from './modifyorder.component';

describe('ModifyorderComponent', () => {
  let component: ModifyOrderComponent;
  let fixture: ComponentFixture<ModifyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
