import { MethodGetterService } from './../method-getter.service';
import { CachingService } from './../caching.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lister: any = [];
  loading = true;
  search: string;
  error: string;
  show: string;
  constructor( private http: HttpClient, private cache: CachingService, private getter: MethodGetterService) { }

  ngOnInit() {
    this.find();
  }

 async find () {
    this.loading = true;
    const genre = this.cache.getCacheData();
    const search =  this.search;
   if (genre === 'Action' || genre === 'action' || search === 'Action' || search === 'action') {
      this.lister = [];
      this.show = 'Action';
      await this.getter.getAction().subscribe( response => {
        this.loading = false;
        this.lister.push(response);
      }, error => {
        this.loading = false;
        this.error = 'Please Check your internet connection';
      });
   } else if (genre === 'Romance' || genre === 'romance' || search === 'Romance' || search === 'romance') {
      this.lister = [];
      this.show = 'Romance';
      await this.getter.getRomance().subscribe(response => {
          this.loading = false;
          this.lister.push(response);
        }, error => {
          this.loading = false;
          this.error = 'Please Check Your Internet Connection';
        });
   } else if (genre === 'fantasy' || genre === 'Fantasy' || search === 'fantasy' || search === 'Fantasy') {
      this.lister = [];
      this.show = 'Fantansy';
      await this.getter.getFantasy().subscribe(response => {
          this.loading = false;
          this.lister.push(response);
        }, error => {
          this.error = 'Please Check Your Internet Connection and Reload';
        });
   } else if (genre === 'comedy' || genre === 'Comedy' || search === 'comedy' || search === 'Comedy') {
      this.lister = [];
      this.show = 'Comedy';
      await this.getter.getComdey().subscribe(response => {
          this.loading = false;
          this.lister.push(response);
          console.log(response);
        }, error => {
          this.error = 'Please Check you internet Connection and Reload';
        });
   } else if (genre === 'Tom Cruise' || genre === 'Tom cruise' || genre === 'tom cruise'
   || search === 'Tom Cruise' || search === 'Tom cruise' || search === 'tom cruise') {
      this.lister = [];
      this.show = 'Tom Cruise';
      await this.getter.getTomCruise().subscribe(response => {
          this.loading = false;
          this.lister.push(response);
        }, error => {
          this.error = 'Please Check your internet connection';
        });
    } else if (genre === 'Will Ferrell' || genre === 'will ferrell' || genre === 'Will ferrell' ||
     search === 'Will Ferrell' || search === 'will ferrell' || search === 'Will ferrell') {
      this.lister = [];
      this.show = 'Will Ferrell';
      await this.getter.getWillFerrell().subscribe(response => {
          this.loading = false;
          this.lister.push(response);
          console.log(this.lister);
        }, error => {
          this.error = 'Cannot Connect to the API, Check Your Connection';
        });
    } else {
      this.show = genre;
      this.loading = false;
      this.error = 'No Movie found for: ' + genre;
    }
  }


  clear () {
    sessionStorage.clear();
  }
}
