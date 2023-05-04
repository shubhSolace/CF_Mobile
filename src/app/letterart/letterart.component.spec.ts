import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterartComponent } from './letterart.component';

describe('LetterartComponent', () => {
  let component: LetterartComponent;
  let fixture: ComponentFixture<LetterartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
