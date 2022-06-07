import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private router: Router) { }
  searchDetails = new FormGroup({
    content: new FormControl('')
  })
  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigate(['/buy-a-watch'], { queryParams: { brand : this.searchDetails.value.content,
      mechanism :"" ,
      condition :"" ,
      year :"" ,
      strap : "",
      strap_color:"" ,
      carcase :"" ,
      carcase_form : "",
      carcase_thickness :"" ,
      water_resistence : "",
      carcase_color : "",
      alarm :"" ,
      timer : "",
      gender : ""},queryParamsHandling: 'merge' });
  }
} 
