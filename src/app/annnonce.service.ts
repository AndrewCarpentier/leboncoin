import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AnnnonceService implements OnInit{
  

  listAnnonce = [{id:20,titre:'title', description: 'dzeoijdzedazedazed', photo: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1133906920%2F960x0.jpg%3Ffit%3Dscale',prix:300}];
  annonces;
  annonceSubject = new Subject <any> ()

  constructor() {
    this.annonces = this.listAnnonce;
    this.emit();
   }

   ngOnInit(): void {
    this.annonces = this.listAnnonce;
    this.emit();
  }

  emit = () => {
    this.annonceSubject.next(this.annonces);
  };

  add = (annonce) => {
    this.listAnnonce.unshift(annonce);
    this.annonces = this.listAnnonce;
    this.emit();
  };

  search = (value) => {
    this.annonces = [];

    for(let i = 0 ; i < this.listAnnonce.length ; i++){
      if(this.listAnnonce[i].titre.includes(value)){
        this.annonces.push(this.listAnnonce[i]);
      }
    }
    this.emit();
  };
}
