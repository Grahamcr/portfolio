import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DesignbitsComponent } from './designbits/designbits.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{path: 'about', component: AboutComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'designbits', component: DesignbitsComponent},
                        {path: 'contact', component: ContactComponent},
                        {path: 'portfolio', redirectTo: '', pathMatch: 'full'},
                        {path: '', component: HomeComponent, pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
