import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-utilizator-cumparator',
  templateUrl: './profil-utilizator-cumparator.component.html',
  styleUrls: ['./profil-utilizator-cumparator.component.css']
})
export class ProfilUtilizatorCumparatorComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'vezi nr*';
  public numberTel:any='+4078*******';
  public numberTelColor:any='#FFFFFF';
  constructor() { }

  ngOnInit(): void {
  }
  getNumber(){
    
    this.show = !this.show;
    if(this.show)  
      {this.buttonName = "ascunde nr*";
      this.numberTel= "+40787555239";
      this.numberTelColor="#FFA500";
    }
    else
      {this.buttonName = "vezi nr*";
       this.numberTel ="+4078*******";
       this.numberTelColor="#FFFFFF";
    }
  }

}
