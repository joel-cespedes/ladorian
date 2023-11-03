import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LadorianLoginComponent } from './ladorian-login/ladorian-login.component';
import { TranslateService } from './core/ui/translate/translate.service';

@Component({
  selector: 'ladorian-root',
  standalone: true,
  imports: [ RouterOutlet, LadorianLoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
