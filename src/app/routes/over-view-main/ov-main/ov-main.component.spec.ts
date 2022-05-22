import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvMainComponent } from './ov-main.component';

describe('OvMainComponent', () => {
  let component: OvMainComponent;
  let fixture: ComponentFixture<OvMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
