import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadorianBtnComponent } from './ladorian-btn.component';

describe('LadorianBtnComponent', () => {
  let component: LadorianBtnComponent;
  let fixture: ComponentFixture<LadorianBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LadorianBtnComponent]
    });
    fixture = TestBed.createComponent(LadorianBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
