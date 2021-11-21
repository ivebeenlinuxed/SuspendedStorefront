import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeCharityPageComponent } from './me-charity-page.component';

describe('MeCharityPageComponent', () => {
  let component: MeCharityPageComponent;
  let fixture: ComponentFixture<MeCharityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeCharityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeCharityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
