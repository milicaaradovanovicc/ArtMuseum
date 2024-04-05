import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibitionDetailsComponent } from './exibition-details.component';

describe('ExibitionDetailsComponent', () => {
  let component: ExibitionDetailsComponent;
  let fixture: ComponentFixture<ExibitionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibitionDetailsComponent]
    });
    fixture = TestBed.createComponent(ExibitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
