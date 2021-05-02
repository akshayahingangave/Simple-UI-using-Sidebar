import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntspecialComponent } from './entspecial.component';

describe('EntspecialComponent', () => {
  let component: EntspecialComponent;
  let fixture: ComponentFixture<EntspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
