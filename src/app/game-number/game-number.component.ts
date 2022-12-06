import { Component } from '@angular/core';

@Component({
  selector: 'app-game-numbers',
  templateUrl: './game-number.component.html',
  styleUrls: ['./game-number.component.css']
})
export class GameNumberComponent {
  numbers: any[] = [];
  next_number: any = 1;
  point:number = 0;

  ngOnInit(){
    for (let index = 1; index <= 1000; index++) {
      this.numbers.push( index );
    }
  }

  playGame(number:any){
    if( number != this.next_number ){
      alert('game over');
    }else{
      this.next_number++;
      this.point ++;
    }
  }


}
