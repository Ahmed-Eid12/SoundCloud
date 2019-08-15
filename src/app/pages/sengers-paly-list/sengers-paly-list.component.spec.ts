import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SengersPalyListComponent } from './sengers-paly-list.component';

describe('SengersPalyListComponent', () => {
  let component: SengersPalyListComponent;
  let fixture: ComponentFixture<SengersPalyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SengersPalyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SengersPalyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
