import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsPlayListComponent } from './songs-play-list.component';

describe('SongsPlayListComponent', () => {
  let component: SongsPlayListComponent;
  let fixture: ComponentFixture<SongsPlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsPlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
