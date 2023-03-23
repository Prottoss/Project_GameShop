import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamesPageComponent } from './add-games-page.component';

describe('AddGamesPageComponent', () => {
  let component: AddGamesPageComponent;
  let fixture: ComponentFixture<AddGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGamesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
