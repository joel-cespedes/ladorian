import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadorianInputComponent } from './ladorian-input.component';

describe('LadorianInputComponent', () => {
  let component: LadorianInputComponent;
  let fixture: ComponentFixture<LadorianInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LadorianInputComponent]
    });
    fixture = TestBed.createComponent(LadorianInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
