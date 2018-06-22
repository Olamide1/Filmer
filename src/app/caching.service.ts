import { Injectable } from '@angular/core';

@Injectable()
export class CachingService {

  constructor() { }

  cacheSearch (search) {
    sessionStorage.setItem('search', search);
  }

  getCacheData () {
    return sessionStorage.getItem('search');
  }

}
