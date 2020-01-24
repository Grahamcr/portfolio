import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DesignbitsComponent } from './designbits/designbits.component';
import { ContactComponent } from './contact/contact.component';
import { FordComponent } from './home/ford/ford.component';
import { AcgmapComponent } from './home/acgmap/acgmap.component';
import { CoretechComponent } from './home/coretech/coretech.component';
import { FinditComponent } from './home/findit/findit.component';
import { GhostredComponent } from './home/ghostred/ghostred.component';
import { ImporterComponent } from './home/importer/importer.component';
import { PonyakComponent } from './home/ponyak/ponyak.component';
import { SalesComponent } from './home/sales/sales.component';
import { EmptystateComponent } from './emptystate/emptystate.component';
import { KiwiComponent } from './designbits/kiwi/kiwi.component';
import { CtnpComponent } from './designbits/ctnp/ctnp.component';
import { BlogComponent } from './designbits/blog/blog.component';
import { MapComponent } from './designbits/map/map.component';


const routes: Routes = [{path: 'about', component: AboutComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'designbits', component: DesignbitsComponent},
                        {path: 'contact', component: ContactComponent},
                        {path: 'ford', component: FordComponent},
                        {path: 'acgmap', component: AcgmapComponent},
                        {path: 'coretech', component: CoretechComponent},
                        {path: 'findit', component: FinditComponent},
                        {path: 'ghostred', component: GhostredComponent},
                        {path: 'importer', component: ImporterComponent},
                        {path: 'ponyak', component: PonyakComponent},
                        {path: 'sales', component: SalesComponent},
                        {path: 'empty', component: EmptystateComponent},
                        {path: 'kiwi', component: KiwiComponent},
                        {path: 'ctnp', component: CtnpComponent},
                        {path: 'blog', component: BlogComponent},
                        {path: 'map', component: MapComponent},
                        {path: 'portfolio', redirectTo: '', pathMatch: 'full'},
                        {path: '', component: HomeComponent, pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
