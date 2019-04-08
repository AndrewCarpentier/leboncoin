import { Component, OnInit } from '@angular/core';
import { AnnnonceService } from '../annnonce.service';
import { Router } from '@angular/router';

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

  constructor(private data: AnnnonceService, private router : Router) { }

  valeurAnnonce = (event) => {
    this.annonces[event.target.getAttribute('name')] = event.target.value
  }

  submit = () => {
    this.data.add({...this.annonces})
    alert("Votre annonce est enregistrée !")
    this.router.navigate([""])
  }


  ngOnInit() {
    this.annonces = this.annonces
  }

}
