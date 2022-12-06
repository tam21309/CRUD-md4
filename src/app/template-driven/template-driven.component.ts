import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib'

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  onSubmit( value:any){
    console.log (value)
  }

  onResetForm(formProfile: NgForm){
    console.log(formProfile);
    formProfile.reset();

  }
}
