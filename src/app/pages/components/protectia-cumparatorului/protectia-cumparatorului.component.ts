import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-protectia-cumparatorului',
  templateUrl: './protectia-cumparatorului.component.html',
  styleUrls: ['./protectia-cumparatorului.component.css']
})
export class ProtectiaCumparatoruluiComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<FooterComponent>) { }

  onClose(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
