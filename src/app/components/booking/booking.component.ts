import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  nombrePattern="^[a-zA-Z ]*$"
  telPattern="^[0-9]{7,10}"
  //telPattern="^((\\+51-?)|0)?[0-9]{11}$"
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  textoPattern="^[a-zA-Z ,-0-9]*$"

  opcionSeleccionada:string="";

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    
  }



  formGroup= new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.maxLength(40), Validators.pattern(this.nombrePattern)]),
    email: new FormControl('', [Validators.pattern(this.emailPattern), Validators.required, Validators.maxLength(30)]),
    opcion:new FormControl("",Validators.required)
  })


  onSubmit(){
    console.log(this.formGroup.value)
    
  }
}
