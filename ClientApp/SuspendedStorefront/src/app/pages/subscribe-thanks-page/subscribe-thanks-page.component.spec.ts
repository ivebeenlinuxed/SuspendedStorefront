import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeThanksPageComponent } from './subscribe-thanks-page.component';

describe('SubscribeThanksPageComponent', () => {
  let component: SubscribeThanksPageComponent;
  let fixture: ComponentFixture<SubscribeThanksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeThanksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeThanksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
