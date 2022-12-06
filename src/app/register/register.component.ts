import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formProfile!: FormGroup;
  ngOnInit(){
    this.formProfile = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'confirm-password': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'country': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'age': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      'gender': new FormControl('',[
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
