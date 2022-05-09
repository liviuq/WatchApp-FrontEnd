import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public showBrands: boolean = true;
  public showCategorii: boolean = true;
  public showModels: boolean = false;
  public showMaterials: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(str: string) {
    if (str == "categorii")
      this.showCategorii = !this.showCategorii;
    else if (str == "brands")
      this.showBrands = !this.showBrands;
    else if (str == "models")
      this.showModels = !this.showModels;
    else if (str == "materials")
      this.showMaterials = !this.showMaterials;
  }

}


