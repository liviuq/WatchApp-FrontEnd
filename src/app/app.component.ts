import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WatchApp-FrontEnd';
  inputText = 'input text test';
  buttonText = 'Test'

  constructor(public auth: AuthService){}

  testButton(){
    alert(this.inputText);
  }

  inputChanged(event: string){
    this.inputText = event
  }
}
