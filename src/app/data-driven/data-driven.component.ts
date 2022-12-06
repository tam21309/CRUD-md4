import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {
  formProfile!: FormGroup;
  ngOnInit(){
    this.formProfile = new FormGroup({
      'username': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'phone': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
    })

  }
  onSubmitForm(){
    console.log(this.formProfile?.value);
    
  }
}
