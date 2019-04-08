import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {


   @Input() annonce = {
    id: '',
    titre: '',
    description: '',
    photo: '',
    prix: ''
  };

  constructor() {
    
   }

  ngOnInit() {
  }

}
