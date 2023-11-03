import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadorianInputComponent } from '../core/ui/ladorian-input/ladorian-input.component';
import { LadorianBtnComponent } from '../core/ui/ladorian-btn/ladorian-btn.component';
import { LadorianSliderComponent } from '../core/ui/ladorian-slider/ladorian-slider.component';
import { TranslatePipe } from '../core/ui/translate/translate.pipe';

@Component({
  selector: 'ladorian-login',
  standalone: true,
  imports: [CommonModule, LadorianInputComponent, LadorianBtnComponent, LadorianSliderComponent, TranslatePipe],
  templateUrl: './ladorian-login.component.html',
  styleUrls: ['./ladorian-login.component.scss']
})
export class LadorianLoginComponent {

}
