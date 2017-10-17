import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMemoComponent } from './input-memo.component';

describe('InputMemoComponent', () => {
  let component: InputMemoComponent;
  let fixture: ComponentFixture<InputMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
