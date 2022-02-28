import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minitest1Component } from './minitest1.component';

describe('Minitest1Component', () => {
  let component: Minitest1Component;
  let fixture: ComponentFixture<Minitest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minitest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minitest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
