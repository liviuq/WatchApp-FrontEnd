import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public show4: boolean = false;
  public show5: boolean = false;
  public show6: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }
  toggle(str: string) {
    if (str == "1")
      this.show1 = !this.show1;
    else if (str == "2")
      this.show2 = !this.show2;
    else if (str == "3")
      this.show3 = !this.show3;
    else if (str == "4")
      this.show4 = !this.show4;
      else if (str == "5")
      this.show5 = !this.show5;
      else if (str == "6")
      this.show6 = !this.show6;
      
  }

}
