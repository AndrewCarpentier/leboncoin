import { Component, OnInit } from '@angular/core';
import { AnnnonceService } from '../annnonce.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor(private service: AnnnonceService) { }

  x(){
    this.service.getList();
  }

  ngOnInit() {
  }

}
