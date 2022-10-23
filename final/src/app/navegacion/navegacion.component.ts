import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  github(){
    alert("Te estamos abriendo una pagina a lado para que no abandone esta.")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
