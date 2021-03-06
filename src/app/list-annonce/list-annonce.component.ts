import { Component, OnInit } from '@angular/core';
import { AnnnonceService } from '../annnonce.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {


  listeAnnonce = [];


  constructor(private service : AnnnonceService) {
   }

  ngOnInit() {
    this.service.annonceSubject.subscribe((newAnnonces)=>{
      this.listeAnnonce = newAnnonces;
    })
    this.listeAnnonce = this.service.annonces;
  }

}
