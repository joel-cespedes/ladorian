import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadorianCheckboxComponent } from './ladorian-checkbox.component';

describe('LadorianCheckboxComponent', () => {
  let component: LadorianCheckboxComponent;
  let fixture: ComponentFixture<LadorianCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LadorianCheckboxComponent]
    });
    fixture = TestBed.createComponent(LadorianCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
