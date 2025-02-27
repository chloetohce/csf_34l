import { Component, OnInit } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  photos: any[] = []
  
  constructor(private fakeryService: FakeryService) { }

  async ngOnInit(): Promise<void> {
    await this.fakeryService.getFakeryPhotos()
      .then((arr) => Object.entries(arr)
        .forEach(photo => this.photos.push(photo[1])))
      .catch((err) => console.error(err))
    console.log("Photos: ", this.photos)
  }
}
