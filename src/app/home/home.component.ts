import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  searchResult: Product[] = [];

  constructor(private prodService: ProductService) { }

  ngOnInit(): void{
    this.prodService.getProducts().subscribe( (res) => {
      this.products = res;
    });
  }

  searchProduct(searchString): void{
    this.searchResult = this.products.filter((item: Product) => {
      return item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    });
  }

}
