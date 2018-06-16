import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lists: any;
  constructor( private http: HttpClient) {}
  loading = true;
  error: string;
  showinfo = true;
  ngOnInit () {
    this.loading = true;
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4630eff32e0cfc71fd521e43e5293d20&language=en-US&'
    + 'sort_by=popularity.desc&include_adult=false&include_video=false&page=1').subscribe( response => {
      console.log(response.results);
      this.lists = response.results;
      console.log(this.lists);
      this.loading = false;
    }, error => {
      console.log(error);
      this.error = 'Cannot Connect to the API, Check Your internet connection';
      this.loading = false;
    });
  }

  loadDets () {
    this.showinfo = true;
  }
}
