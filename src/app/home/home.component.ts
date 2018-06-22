import { CachingService } from './../caching.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: any = [];
  loading = true;
  error: string;
  showinfo = true;
  search: string;
  constructor(private http: HttpClient, private router: Router, private cache: CachingService) { }

  ngOnInit() {
    this.loadMovies();
  }

  // Function to Load initial Hollywood Movies to the front end
  async loadMovies() {
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

  // A function to Cache the Search, it can also be a Service.
  Cache () {
    this.loading = true;
    const genre = this.search;
    this.cache.cacheSearch(genre);
    this.router.navigateByUrl('/search');
  }

}
