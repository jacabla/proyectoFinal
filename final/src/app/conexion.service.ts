import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor( private http: HttpClient ) { }

  getGifs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=yROddyHtaXdeX2bERTd88x0SfK9sPBXu&limit=50&rating=g')
  }

  getStickers() {
    return this.http.get('https://api.giphy.com/v1/stickers/trending?api_key=yROddyHtaXdeX2bERTd88x0SfK9sPBXu&limit=25&rating=r')
  }
}
