import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  visible = false
  open () { 
    this.visible = true;
  }
  close () {
    this.visible = false;
  }
}
