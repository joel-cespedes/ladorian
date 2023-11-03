import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TranslateService } from './translate.service';

describe('TranslateService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return label', () => {
    service.labels = { 'key1': 'something' }
    expect(service.translate('key1')).toEqual('something')
  });


  it('should be return label', () => {
    service.labels = { 'key1': 'something {parametro}' }
    service.translate('key1', { parametro: 'res_parametro' })
    expect(service.translate('key1', { parametro: 'res_parametro' })).toBe('something res_parametro')
  });




  it('should return a promise', () => {
    service.use('es').then(res => {
      expect(res).toContain(Promise.resolve(true))
    })
  });


});
