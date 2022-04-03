import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WatchApp-FrontEnd';
  buttonText = 'Test'

  testButton(event: any){
    alert("Butonul functioneaza")
  }
}
