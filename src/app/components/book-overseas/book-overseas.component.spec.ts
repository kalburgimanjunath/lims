import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOverseasComponent } from './book-overseas.component';

describe('BookOverseasComponent', () => {
  let component: BookOverseasComponent;
  let fixture: ComponentFixture<BookOverseasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOverseasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOverseasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
