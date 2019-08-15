import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPalyerComponent } from './audio-palyer.component';

describe('AudioPalyerComponent', () => {
  let component: AudioPalyerComponent;
  let fixture: ComponentFixture<AudioPalyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioPalyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPalyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
