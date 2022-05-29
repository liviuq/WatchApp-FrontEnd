import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProtectiaCumparatoruluiComponent } from 'src/app/pages/components/protectia-cumparatorului/protectia-cumparatorului.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  protectiaCumparatorului(){
    this.dialogRef.open(ProtectiaCumparatoruluiComponent);
  }

  ngOnInit(): void {
  }

  topFunction(): void{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
