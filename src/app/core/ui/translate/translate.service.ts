import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  /** Label Holder */
  public labels: any = {};

  public httpClient: HttpClient;
  private currentLang = new BehaviorSubject<string>('');
  public currentLang$ = this.currentLang.asObservable();


  constructor(private router: Router, handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  /** Language Loader */
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



  /** Recibe por pipe la key a traducir */
  public translate = (key: string, params: any) => {


    //Buscamos dentro del archivo json i18n la key a traduciir
    const foundAppKey = this.labels[key];

    //Si no exite la key en el archivo disparamos un error
    if (!foundAppKey) {
     // alert("This keys doesn't match")
    }

    /*
      Si existe parametros en el pipe de traducción lo usamos
      buscamos la key (esta key debe terner el nombre del parçametro con corchetes {ejemplo} )
      */
    if (params) {
      const ls = Object.keys(params);

      //Verificamos de que que el parámetro tenga el mismo nombre
      if (!ls) {
        alert("This keys doesn't match")
      }

      //Buscamos los parametros y los reemplazamos en la palabra identificada con la key
      let withParameter = foundAppKey;

      ls.forEach(param => {
        withParameter = withParameter.replace(`{${param}}`, params[param])
      })
      return withParameter

    }
    return foundAppKey;

  }


}
