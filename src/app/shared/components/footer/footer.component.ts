import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProtectiaCumparatoruluiComponent } from 'src/app/pages/components/protectia-cumparatorului/protectia-cumparatorului.component';
import { ReturComodComponent } from 'src/app/pages/components/retur-comod/retur-comod.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  topFunction(): void{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  protectiaCumparatorului(){
    this.dialogRef.open(ProtectiaCumparatoruluiComponent);
  }

  returComod(){
    this.dialogRef.open(ReturComodComponent);
  }

}
