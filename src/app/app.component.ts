import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lists: any = [];
  constructor( private http: HttpClient) {}
  loading = true;
  error: string;
  lister: any = [];
  showinfo = true;
  search: string;
  ngOnInit () {
    this.loadMovies();
  }

  async loadMovies () {
    this.loading = true;
    await this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US&'
      + 'sort_by=popularity.desc&include_adult=false&include_video=false&page=1').subscribe(response => {
        console.log(response);
        this.lists.push(response);
        console.log(this.lists);
        this.loading = false;
      }, error => {
        console.log(error);
        this.error = 'Please check your internet connection';
        this.loading = false;
      });
  }

  async find () {
    this.showinfo = false;
    this.loading = true;
    const genre = this.search;
    console.log(genre);
    if (genre === 'Action' || genre === 'action' ) {
     await this.http.get('https://api.themoviedb.org/3/genre/28/movies?'
        + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false').subscribe( response => {
          this.loading = false;
          this.lister.push(response);
          if ( this.lister.length === 0 ) {
            this.loading = false;
            this.error = 'No Movie found for: ' + genre;
          }
        }, error => {
          this.loading = false;
          this.error = 'Please Check your internet connection';
        });
    } else if (genre === 'Romance' || genre === 'romance') {
     await this.http.get('https://api.themoviedb.org/3/genre/18/movies?'
        + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false').subscribe( response => {
          this.loading = false;
          this.lister.push(response);
          if (this.lister.length === 0) {
            this.loading = false;
            this.error = 'No Movie found for: ' + genre;
          }
        }, error => {
          this.loading = false;
          this.error = 'Please Check Your Internet Connection';
        });
    } else if (genre === 'fantasy' || genre === 'Fantasy') {
     await this.http.get('https://api.themoviedb.org/3/genre/878/movies?'
        + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false').subscribe( response => {
          this.loading = false;
          this.lister.push(response);
          if (this.lister.length === 0) {
            this.loading = false;
            this.error = 'No Movie found for: ' + genre;
          }
        }, error => {
          this.error = 'Please Check Your Internet Connection and Reload';
        });
    } else if (genre === 'comedy' || genre === 'Comedy') {
      await this.http.get('https://api.themoviedb.org/3/genre/35/movies?'
        + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false').subscribe(response => {
          this.loading = false;
          this.lister.push(response);
          console.log(response);
        }, error => {
          this.error = 'Please Check you internet Connection and Reload';
        });
    } else {
      this.loading = false;
      this.error = 'No Movie found for: ' + genre;
    }
    /** this.http.get('https://api.themoviedb.org/3/genre/{genre_id}/movies?'
      + 'api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US' + '&include_adult=false').subscribe(response => {
      console.log(response);
      this.lists.push(response);
    }, error => {
      console.log(error);
    });**/

  }
}
