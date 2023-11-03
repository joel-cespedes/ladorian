import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ladorian-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ladorian-btn.component.html',
  styleUrls: ['./ladorian-btn.component.scss']
})
export class LadorianBtnComponent {

  @Input()  action: string = 'summit';

  @Input({ required: true })  color: string = 'primary';

  @Input() type: string = 'default';
  

}
