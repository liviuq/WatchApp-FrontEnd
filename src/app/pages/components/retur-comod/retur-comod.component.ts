import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-retur-comod',
  templateUrl: './retur-comod.component.html',
  styleUrls: ['./retur-comod.component.css']
})
export class ReturComodComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<FooterComponent>) { }

  onClose(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
