import { HttpBackend } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { TranslatePipe } from './translate.pipe';
import { TranslateService } from './translate.service';

class TranslateSrv {
  translate(key: string) {
    return 'something'
  }
}

describe('TranslatePipe', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [TranslateService, TranslateSrv]
    });
  }));


  it('create an instance', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    const pipe = new TranslatePipe(service);
    expect(pipe).toBeTruthy();
  });

  it('The service should return label translate', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    const pipe = new TranslatePipe(service);
    expect(pipe).toBeTruthy();
  });

  it('The service should return label translate', (done) => {
    const service: TranslateService = TestBed.get(TranslateSrv);
    const pipe = new TranslatePipe(service);
    expect(pipe.transform('key')).toEqual('something')
    done()
  });
});
