import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AnnnonceService {

  annonces = [{id:20,titre:'title', description: 'dzeoijdzedazedazed', photo: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1133906920%2F960x0.jpg%3Ffit%3Dscale',prix:300}];;
  annonceSubject = new Subject <any> ()

  constructor() {
      this.emit();
   }

  emit = () => {
    this.annonceSubject.next(this.annonces);
  };

  add = (annonce) => {
    this.annonces.push(annonce);
    this.emit();
  };

  search = (value) => {
    let list = [];
    this.annonces.forEach((annonce) => {
      if (annonce.titre.includes(value)) {
        list.push(annonce);
      }
    });
    return list;
  };
}
