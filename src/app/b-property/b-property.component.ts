import { Component } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html',
  styleUrls: ['./b-property.component.css']
})
export class BPropertyComponent {
  itemImageUrl:string = 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/314025986_2765777310224859_6275566269370651811_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CLCVxNp7ioUAX-08Clm&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDzawoJDLo_JZNJzTj97URO47_ZHZPNJvjDkzHg8OmI4w&oe=638C616B';
  title:string = 'Ảnh Đẹp';
  colspan:number = 1;
  isUnchanged:boolean = false;
}
