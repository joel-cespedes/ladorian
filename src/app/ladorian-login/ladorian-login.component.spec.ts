import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadorianLoginComponent } from './ladorian-login.component';

describe('LadorianLoginComponent', () => {
  let component: LadorianLoginComponent;
  let fixture: ComponentFixture<LadorianLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LadorianLoginComponent]
    });
    fixture = TestBed.createComponent(LadorianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
