import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resorttour',
  templateUrl: './resorttour.component.html',
  styleUrls: ['./resorttour.component.css']
})
export class ResorttourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scroll(el) {
    el.scrollIntoView();
}

}
