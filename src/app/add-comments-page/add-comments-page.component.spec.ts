import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentsPageComponent } from './add-comments-page.component';

describe('AddCommentsPageComponent', () => {
  let component: AddCommentsPageComponent;
  let fixture: ComponentFixture<AddCommentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
