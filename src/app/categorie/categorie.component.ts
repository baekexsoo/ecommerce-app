import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void { 
    console.log(this.product)
  }

}
