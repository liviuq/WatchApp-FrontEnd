import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputType } from './input-type';

@Component({
  selector: 'app-custom-input-field',
  templateUrl: './custom-input-field.component.html',
  styleUrls: ['./custom-input-field.component.css']
})
export class CustomInputFieldComponent implements OnInit {

  inputType: InputType = InputType.EMAIL;

  @Input() inputText: string = '';
  @Output() inputChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitString(){
    this.inputChanged.emit(this.inputText);
  }

}
