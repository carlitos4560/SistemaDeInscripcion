import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    registro: FormGroup;
//     sesion:[{ "id":1,
//     "user": '201101528',
//     "pasword": '828282' ,
//     "estado": true ,
//     "rol": 'estudiante',
//     "poyecto": true
//   },
//   {   "id":2,
//       "user":'201001528',
//       "pasword": '828282' ,
//       "estado": false ,
//       "rol": 'estudiante',
//       "poyecto": false
// },
// {   "id":3,
//       "user":'202001528',
//       "pasword": '828282' ,
//       "estado": true,
//       "rol": 'estudiante',
//       "poyecto": true;
// },
// {   "id":4,
//     "user":'201111528',
//     "pasword": '828282' ,
//     "estado": true ,
//     "rol": 'admin'
//     "poyecto": false;
// },
// { "id":5,
//     "user":'201501528',
//     "pasword": '828282' ,
//     "estado": true ,
//     "rol": 'docente'
//     "poyecto": false;
// }];
    
    constructor(private fb: FormBuilder, private router:Router) {
       
     }
  
    ngOnInit() {
      this.registro = this.fb.group({
        'cuenta': ['',[Validators.required, Validators.pattern('^[A-Za-z]*$')]],
        'passwor':['',[ Validators.required ]]
      });
    }  
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  ingreso(){
    this.router.navigate([ 'forms' ]);
  }
  // ingreso(){
    // let cuenta: string = " ";
    // let pass: string =" ";
    // cuenta = this.registro.get('cuenta').value;
    // pass == this.registro.get('passwor').value;
    // let aux;
    // for(let i =1  ;i <= 4; i++){
    //   if(cuenta === this.sesion[i].user){
    //     aux = this.sesion[i];
    //   }
    // }
  //   if(aux.estado === true){
  //     switch(aux.rol){
  //       case 'docente': default: this.router.navigate([ '/' ]);
  //         break;
  //       case 'estudiante': if(aux.proyecto === true){
  //                           this.router.navigate([ 'menu' ]);
  //                         }else{
  //                           this.router.navigate([ 'forms' ]);
  //                         }
  //         break;
  //       case 'admin': this.router.navigate([ 'teachers' ]);
  //         break;
  
  //       // default: this.router.navigate([ '/' ]);
  //     }
  //   }
  //   else{
  //     alert('El usuario no esta registrado');
  //   }
  // }
}
