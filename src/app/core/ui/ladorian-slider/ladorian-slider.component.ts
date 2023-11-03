import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ladorian-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ladorian-slider.component.html',
  styleUrls: ['./ladorian-slider.component.scss']
})
export class LadorianSliderComponent {

  @Input() images: string[] = ['slider1.png'];

}
