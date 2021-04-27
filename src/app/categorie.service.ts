import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any>{
    const url = 'assets/data/cat-product.json';
    return this.httpClient.get(url)
    .pipe(
      tap(
        () => console.log('Product fetched')
        ));
    }
}
