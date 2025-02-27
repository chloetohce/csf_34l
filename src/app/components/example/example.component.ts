import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit {
  numbersArr = from([1, 2, 3, 4, 6, 11, 12]); // Can have from, of or to
  foodArr = from(["Pizza", "Burger", "Sandwich", "Pasta", "Katsudon"])
  nameArr = from([
    {fname: "Josh", lname: "Smith"},
    {fname: "Edward", lname: "Milton"},
    {fname: "Bartholomew", lname: "Montgomery"}
  ])

  constructor() { }

  ngOnInit(): void {
    this.multiplyBy3();
    this.toUppercase();
    this.concatFullName();
  }

  multiplyBy3() {
    this.numbersArr.pipe(
      map((data: number) => data * 3)
    )
      .subscribe(data => console.log(data));
  }

  toUppercase() {
    this.foodArr
      .pipe(
        map(data => data.toUpperCase())
      )
      .subscribe(data => console.log(data))
  }

  concatFullName() {
    this.nameArr.pipe(
      map(person => person.fname + " " + person.lname)
    )
    .subscribe(data => console.info(data))
  }
}
