import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DeposerAnnonceComponent } from './deposer-annonce/deposer-annonce.component';
import { AnnnonceService } from './annnonce.service';

const mesRoutes: Routes = [
  { path: '', component: ListAnnonceComponent },
  { path: 'depot', component: DeposerAnnonceComponent },
  { path : '**', component : ListAnnonceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RechercheComponent,
    ListAnnonceComponent,
    AnnonceComponent,
    DeposerAnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [AnnnonceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
