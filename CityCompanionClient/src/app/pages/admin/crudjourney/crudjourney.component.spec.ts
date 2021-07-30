import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudjourneyComponent } from './crudjourney.component';

describe('CrudjourneyComponent', () => {
  let component: CrudjourneyComponent;
  let fixture: ComponentFixture<CrudjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudjourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
