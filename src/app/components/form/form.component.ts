import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registro: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {
    
   }

  ngOnInit() {
    this.registro = this.fb.group({
      'titulo': ['',[Validators.required]],
      'general':['',[ Validators.required ]],
      'especificos': ['',[ Validators.required ]],
      'descripcion': ['',[ Validators.required ]],
      // 'docente': ['',[Validators.required]],//, Validators.pattern('^[A-Za-z]*')]],
      // 'tutor': ['',[ Validators.required ]],
      // 'tutor2': ['',[ Validators.required ]],
    });
  }  
  option =['Blaco Coca Leticia', 'Corina Flores Virruel', 'Vladimir Costas'];
  registrar(){
    //  alert(`Usted a regitrado satisfactoriamente el documento`);
      if( this.registro.valid){
        alert('El proyecto : '+ this.registro.get('titulo').value + 'fue registrado con exito');
        this.router.navigate([ '/' ]);
      }
      else{
        alert("Debe llenar los campos necesarios");    
      }
      
  }
  cancelar(){
    this.router.navigate([ '/' ]);
  }


}
