import { Component, OnInit } from '@angular/core';
import { AnnnonceService } from '../annnonce.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  stock

  valeurStock(e) {
    this.stock = e.target.value;
  }

  constructor(private service: AnnnonceService) { }

  ngOnInit() {
  }

  recherche(){
      this.service.search(this.stock);
  }


}
