import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicComponent } from './orthopaedic.component';

describe('OrthopaedicComponent', () => {
  let component: OrthopaedicComponent;
  let fixture: ComponentFixture<OrthopaedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthopaedicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
