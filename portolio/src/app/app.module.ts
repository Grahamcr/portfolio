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
import { HeroComponent } from './home/hero/hero.component';
import { CaseintroComponent } from './home/caseintro/caseintro.component';
import { ProblemsolutionComponent } from './home/problemsolution/problemsolution.component';
import { ImpactComponent } from './home/impact/impact.component';
import { SolutionComponent } from './home/solution/solution.component';
import { LeassonslearnedComponent } from './home/leassonslearned/leassonslearned.component';
import { GettoknowComponent } from './home/gettoknow/gettoknow.component';
import { OldContentComponent } from './home/old-content/old-content.component';
import { OldponyakComponent } from './home/ponyak/oldponyak/oldponyak.component';
import { OldfinditComponent } from './home/findit/oldfindit/oldfindit.component';
import { OldghostComponent } from './home/ghostred/oldghost/oldghost.component';

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
    AcgmapComponent,
    HeroComponent,
    CaseintroComponent,
    ProblemsolutionComponent,
    ImpactComponent,
    SolutionComponent,
    LeassonslearnedComponent,
    GettoknowComponent,
    OldContentComponent,
    OldponyakComponent,
    OldfinditComponent,
    OldghostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
