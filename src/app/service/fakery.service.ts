import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  private fakeryUrl = 'https://jsonfakery.com/photos'

  private output: any

  constructor(private http: HttpClient) { }

  async getFakeryPhotos() { 
    let temp = lastValueFrom(this.http.get(this.fakeryUrl))// How to make function call async?
    console.info("async result: ", temp.then(result => this.output = result))
    return temp
  }
}
