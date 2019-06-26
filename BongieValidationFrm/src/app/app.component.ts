import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BongieValidationFrm';
info=[]
  personsForm
 
  constructor (public FormBuilder: FormBuilder) {
   this.personsForm = FormBuilder.group({
     name:["",Validators.required], 
     Fname:["",Validators.required], 
     Surname:["",Validators.required], 
     Age:["",Validators.required],
     id:["",Validators.required,Validators.length],  
     Email:["",Validators.email],
     MobileNum:["",Validators.required,Validators.length],
    })
}

name: string=""
 Fname: string=""
 Surname: string=""
 id: string=""
 Age: string=""
 Email: string=""
MobileNum: string=""

AddNew(){
  this.info.push({
 name:this.name,
 Fname:this.Fname,
 Surname:this.Surname,
 id:this.id,
 Age:this.Age,
 Email:this.Email,
 MobileNum:this.MobileNum})

//  this.info.push({
//   name:this.personsForm.value.name,
//   Fname:this.personsForm.value.Fname,
//   Surname:this.personsForm.value.Surname,
//   id:this.personsForm.value.id,
//   Age:this.personsForm.value.Age,
//   Email:this.personsForm.value.Email,
//   MobileNum:this.personsForm.value.MobileNum})

//  this.personsForm.name=""
//  this.personsForm.Fname=""
//  this.personsForm.Surname=""
//  this.personsForm.id=""
//  this.personsForm.Age=""
//  this.personsForm.Email=""
//  this.personsForm.MobileNum=""
}

}