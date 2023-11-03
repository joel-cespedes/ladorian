import { Component, ElementRef, Input, ViewChild,  } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ladorian-input',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './ladorian-input.component.html',
  styleUrls: ['./ladorian-input.component.scss'],
  animations: [
    trigger('labelAnimation', [
      state('up', style({
        transform: 'translateY(-.9em)',
      })),
      state('down', style({
        transform: 'translateY(0)',
      })),
      transition('down => up', animate('300ms ease-in')),
      transition('up => down', animate('300ms ease-out'))
    ])
  ]
})

export class LadorianInputComponent {

  public inputValue: string = '';

  public focus: boolean = false;

  @ViewChild('input', { static: false }) input!: ElementRef;

  @Input() type: string = 'text';

  @Input() placeholder: string = 'Ingresa datos...';

  @Input() errorInput: string = 'Supporting text';

  @Input() maxLength: number = 40;

  @Input() minLength: number = 2;

  @Input() required: boolean = false;



  checkFocusAndValue() {
    const isFocused = document.activeElement === this.input.nativeElement;
    this.inputValue = isFocused || this.input.nativeElement.value;
  }

  ngAfterViewInit() {
    this.checkFocusAndValue()
  }

  chckFocus() {
    this.checkFocusAndValue();
  }


}
