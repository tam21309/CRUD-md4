import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private _ProductService:ProductService){

  }
  ngOnInit(){
    //gọi phương thức all của ser
    let items = this._ProductService.all();
    console.log(items);
    //gọi phương thức của find của ser
    let item = this._ProductService.find(0);
    console.log(items);
    //gọi phương thức của store của ser
    let newProduct : Product = {
      id: 2,
      name: 'Tâm',
      price: 15000
    }
    this._ProductService.store(newProduct);
    items = this._ProductService.all();
    console.log(items);
    //gọi phương thức của update của ser
    let updateProduct : Product = {
      id: 1,
      name: 'Phi',
      price: 25000
    }
    this._ProductService.update(1,newProduct);
    items = this._ProductService.all();
    console.log(items);
    //gọi phương thức của destroy của ser
    this._ProductService.destroy(newProduct);
    items = this._ProductService.all();
    console.log(items);

  }
}
