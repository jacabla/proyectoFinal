import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css'],
})
export class GiftsComponent implements OnInit {
  gifs: any[] = [];

  constructor(private conexionservice: ConexionService) {}

  ngOnInit(): void {
    this.conexionservice.getGifs().subscribe((response: any) => {
      this.gifs = response.data;
    });
  }
}
