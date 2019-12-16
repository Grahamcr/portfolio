import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DesignbitsComponent } from './designbits/designbits.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { DiamondimgComponent } from './diamondimg/diamondimg.component';
import { LargediamondComponent } from './largediamond/largediamond.component';
import { ColordiamondComponent } from './colordiamond/colordiamond.component';
import { ContactblockComponent } from './contactblock/contactblock.component';
import { FordComponent } from './home/ford/ford.component';
import { FinditComponent } from './home/findit/findit.component';
import { ImporterComponent } from './home/importer/importer.component';
import { SalesComponent } from './home/sales/sales.component';
import { PonyakComponent } from './home/ponyak/ponyak.component';
import { GhostredComponent } from './home/ghostred/ghostred.component';
import { CoretechComponent } from './home/coretech/coretech.component';
import { AcgmapComponent } from './home/acgmap/acgmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DesignbitsComponent,
    ContactComponent,
    HeaderComponent,
    DiamondimgComponent,
    LargediamondComponent,
    ColordiamondComponent,
    ContactblockComponent,
    FordComponent,
    FinditComponent,
    ImporterComponent,
    SalesComponent,
    PonyakComponent,
    GhostredComponent,
    CoretechComponent,
    AcgmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
