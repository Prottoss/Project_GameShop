import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeysPageComponent } from './add-keys-page.component';

describe('AddKeysPageComponent', () => {
  let component: AddKeysPageComponent;
  let fixture: ComponentFixture<AddKeysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKeysPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
