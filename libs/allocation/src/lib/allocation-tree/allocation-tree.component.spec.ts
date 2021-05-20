import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationTreeComponent } from './allocation-tree.component';

describe('AllocationTreeComponent', () => {
  let component: AllocationTreeComponent;
  let fixture: ComponentFixture<AllocationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
