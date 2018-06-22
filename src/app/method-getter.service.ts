import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MethodGetterService {

  constructor( private http: HttpClient) { }

  getAction () {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US&'
      + 'sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }

  getRomance () {
    return this.http.get('https://api.themoviedb.org/3/genre/18/movies?'
      + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false');
  }

  getFantasy () {
    return this.http.get('https://api.themoviedb.org/3/genre/878/movies?'
      + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false');
  }

  getComdey () {
    return this.http.get('https://api.themoviedb.org/3/genre/35/movies?'
      + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false');
  }

  getTomCruise () {
   return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US&'
      + 'with_cast=500&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }

  getWillFerrell () {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US&'
      + 'with_cast=23659&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }
}
