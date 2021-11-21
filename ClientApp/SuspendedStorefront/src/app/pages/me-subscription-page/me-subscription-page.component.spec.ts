import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSubscriptionPageComponent } from './me-subscription-page.component';

describe('MeSubscriptionPageComponent', () => {
  let component: MeSubscriptionPageComponent;
  let fixture: ComponentFixture<MeSubscriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeSubscriptionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeSubscriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
