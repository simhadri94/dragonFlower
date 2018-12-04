import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Visio-Theme';
  private _opened: boolean = false;
  private _modeNum: number = 0;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
