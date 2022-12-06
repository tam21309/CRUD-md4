import { Component ,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-m-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.css']
})
export class MInputComponent {
  @Input('item') item: string | undefined;
  constructor(){}
  ngOnInit() :void {
    console.log(this.item);
  }
}
