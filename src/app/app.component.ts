import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'start';
  age:number = 18;
  hasMoney:boolean = true;
  books:any[] = ['Toán','Lí','Hóa'];
}
