import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadorianSliderComponent } from './ladorian-slider.component';

describe('LadorianSliderComponent', () => {
  let component: LadorianSliderComponent;
  let fixture: ComponentFixture<LadorianSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LadorianSliderComponent]
    });
    fixture = TestBed.createComponent(LadorianSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
