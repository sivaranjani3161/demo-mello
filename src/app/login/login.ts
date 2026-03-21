import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

mobileForm!:FormGroup;

constructor(private fb:FormBuilder, private router:Router){}
 
ngOnInit(): void {
  this.mobileForm=this.fb.group({
    phone:[
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ]
  });

}
 limitInput(event:any):void{


  let value=event.target.value;

if(value.length>10){
  value=value.slice(0,10);
}
  this.mobileForm.get('phone')?.setValue(value, { emitEvent: false });

 }
onSubmit(){
  if(this.mobileForm.valid){
    const phone=this.mobileForm.value.phone;

    localStorage.setItem('phone',phone);
this.router.navigate(['/home']);
    console.log('Saved',phone);


  }

  else{
    this.mobileForm.markAllAsTouched();
  }
}

 }


