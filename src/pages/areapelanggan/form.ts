import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { checkFirstCharacterValidator } from '../validators/customValidators';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

	authForm : FormGroup;

	  
	submitForm(value: any):void{
		console.log('Form submited!')
		console.log(value);
	}	

}
