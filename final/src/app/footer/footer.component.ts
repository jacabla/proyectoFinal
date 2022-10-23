import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer(){
    alert("Profe estos links no los configuree entonces lo devuelven al home jeje :)")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
