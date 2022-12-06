import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  onSale:boolean = true;
  classExpresstion:Array<string> = ['class-1', 'class-2'];
  actionName:string = 'Tâm';
  expresstion:string = 'Red';
  isDanger:boolean = true;

}
