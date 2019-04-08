import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  stock 
  valeurStock(e){
    this.stock=e.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

  
}
