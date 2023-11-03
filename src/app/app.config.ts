import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateService } from './core/translate/translate.service';

function initialise(translate: TranslateService) {
  return async () => {
    await translate.use('es');
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    { 
      provide: APP_INITIALIZER, 
      useFactory: initialise, 
      deps: [TranslateService], 
      multi: true 
    }
  ]
};
