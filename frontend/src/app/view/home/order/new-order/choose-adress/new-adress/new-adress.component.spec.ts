import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdressComponent } from './new-adress.component';

describe('NewAdressComponent', () => {
  let component: NewAdressComponent;
  let fixture: ComponentFixture<NewAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
