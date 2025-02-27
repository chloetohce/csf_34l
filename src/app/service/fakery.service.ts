import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  private fakeryUrl = 'https://jsonfakery.com/photos'

  constructor(private http: HttpClient) { }

  getFakeryPhotos() {
    this.http.get(this.fakeryUrl)
  }
}
