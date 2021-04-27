import { Component, OnInit } from '@angular/core';
import {Category } from '../models/cat-products.interface';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  products: Category[] = [];
  searchResult: Category[] = [];

  constructor(private prodService: CategorieService) { }

  ngOnInit(): void{
    this.prodService.getProducts().subscribe( (res) => {
      this.products = res;
    });

    console.log(this.products)
  }

  searchProduct(searchString): void{
    this.searchResult = this.products.filter((item: Category) => {
      return item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    });
  }

}
