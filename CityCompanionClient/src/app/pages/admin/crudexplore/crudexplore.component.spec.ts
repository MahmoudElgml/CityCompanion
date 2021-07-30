import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudexploreComponent } from './crudexplore.component';

describe('CrudexploreComponent', () => {
  let component: CrudexploreComponent;
  let fixture: ComponentFixture<CrudexploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudexploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
