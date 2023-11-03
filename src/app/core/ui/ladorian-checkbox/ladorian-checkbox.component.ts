import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ladorian-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ladorian-checkbox.component.html',
  styleUrls: ['./ladorian-checkbox.component.scss']
})
export class LadorianCheckboxComponent {

  @Input() label: string = '';

  @Input() value: boolean = false;

}
