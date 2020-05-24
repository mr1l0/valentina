import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDrinksComponent } from './choose-drinks.component';

describe('ChooseDrinksComponent', () => {
  let component: ChooseDrinksComponent;
  let fixture: ComponentFixture<ChooseDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
