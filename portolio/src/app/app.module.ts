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
    ContactblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
