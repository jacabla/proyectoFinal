import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  stickers: any[] = [];

  constructor(private conexionservice: ConexionService) {}

  ngOnInit(): void {
    this.conexionservice.getStickers().subscribe((response: any) => {
      this.stickers = response.data;
    });
  }
}
