import { Component, OnInit } from '@angular/core';
import { AnnnonceService } from '../annnonce.service';


@Component({
  selector: 'app-deposer-annonce',
  templateUrl: './deposer-annonce.component.html',
  styleUrls: ['./deposer-annonce.component.css']
})
export class DeposerAnnonceComponent implements OnInit {

  annonce = {
    id : 0,
    titre : "",
    description : "",
    photo : "",
    prix : "",
  };

  annonces = []

  constructor(private data: AnnnonceService) { }

  valeurAnnonce = (event) => {
    this.data.annonce[event.target.attribute('name')] = event.target.value
  }

  submit = () => {
    this.data.add({...this.data.annonce})
    alert("Votre annonce est enregistrée !")
  }


  ngOnInit() {
    this.annonces = this.data.annonce

  }

}
