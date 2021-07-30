import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResurantsComponent } from './resurants.component';

describe('ResurantsComponent', () => {
  let component: ResurantsComponent;
  let fixture: ComponentFixture<ResurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
