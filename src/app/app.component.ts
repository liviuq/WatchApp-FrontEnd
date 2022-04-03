import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WatchApp-FrontEnd';
  inputText = 'input text test';
  buttonText = 'Test'

  testButton(){
    alert(this.inputText);
  }

  inputChanged(event: string){
    this.inputText = event
  }
}
