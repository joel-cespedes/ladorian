import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {


  public labels: any = {};

  public httpClient: HttpClient;

  private currentLang = new BehaviorSubject<string>('');

  public currentLang$ = this.currentLang.asObservable();

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }


  public use(lang: string): Promise<{}> {
    const url = `assets/i18n/${lang || 'es'}.json`;
    this.currentLang.next(lang)
    return new Promise<{}>(
      resolve => {
        const app$ = this.httpClient.get(`assets/i18n/${lang || 'es'}.json`);
        app$.subscribe(response => {
          this.labels = response;
          resolve(true);
        });
      }
    );
  }



  public translate = (key: string, params?: any) => {

    const foundAppKey = this.labels[key];

    if (params) {
      const ls = Object.keys(params);

      if (!ls) {
        alert("This keys doesn't match")
      }

      let withParameter = foundAppKey;
      ls.forEach(param => {
        withParameter = withParameter.replace(`{${param}}`, params[param])
      })
      return withParameter

    }
    return foundAppKey;

  }


}
