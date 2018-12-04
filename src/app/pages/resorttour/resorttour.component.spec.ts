import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResorttourComponent } from './resorttour.component';

describe('ResorttourComponent', () => {
  let component: ResorttourComponent;
  let fixture: ComponentFixture<ResorttourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResorttourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResorttourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
