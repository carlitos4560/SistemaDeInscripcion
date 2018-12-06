import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  proyectos(){
    alert('este acceso aun no esta disponible');
  }
  docentes(){
    alert('este acceso aun no esta disponible');
  }
  sesion(){
    alert('usted esta actualmente en sesion');
  }
}
