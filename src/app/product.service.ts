import { Injectable } from '@angular/core';
import{ Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    {
    id : 0,
    name: 'Iphone',
    price : 40000
    },
    {
      id : 1,
      name: 'Samsung',
      price : 20000
    },
    {
      id : 3,
      name: 'RealMe',
      price : 10000
    }
];
  constructor() { }
  all(){
    return this.products;
  }
  find( id:any ){
    return this.products[id];
  }
  store( data:Product){
    this.products.push(data);
  }
  update( id:any, data:Product){
    this.products[id] = data;
  }
  destroy( id:any ){
    this.products.splice(id,1);
  }
}
