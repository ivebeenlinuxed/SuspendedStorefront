import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityAddComponent } from './charity-add.component';

describe('CharityAddComponent', () => {
  let component: CharityAddComponent;
  let fixture: ComponentFixture<CharityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharityAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
