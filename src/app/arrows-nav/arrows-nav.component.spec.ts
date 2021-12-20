import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsNavComponent } from './arrows-nav.component';

describe('ArrowsNavComponent', () => {
  let component: ArrowsNavComponent;
  let fixture: ComponentFixture<ArrowsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
