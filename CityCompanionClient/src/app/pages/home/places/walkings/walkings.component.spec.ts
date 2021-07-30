import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingsComponent } from './walkings.component';

describe('WalkingsComponent', () => {
  let component: WalkingsComponent;
  let fixture: ComponentFixture<WalkingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
