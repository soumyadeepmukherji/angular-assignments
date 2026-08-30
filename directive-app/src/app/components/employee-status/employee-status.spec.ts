import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeStatus } from './employee-status';

describe('EmployeeStatus', () => {
  let component: EmployeeStatus;
  let fixture: ComponentFixture<EmployeeStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
