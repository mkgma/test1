import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterheadComponent } from './footerhead/footerhead.component';
import { FooterComponent } from './footer/footer.component';
import { ProductviewComponent } from './productview/productview.component';
import { HatchbackcarComponent } from './hatchbackcar/hatchbackcar.component';
import { LatestcarComponent } from './latestcar/latestcar.component';
import { UpcomningcarComponent } from './upcomningcar/upcomningcar.component';
import { UsedcarComponent } from './usedcar/usedcar.component';
import { UsedcarbugetmenuComponent } from './usedcarbugetmenu/usedcarbugetmenu.component';
import { PopularbrandComponent } from './popularbrand/popularbrand.component';
import { UsedcarnearbyComponent } from './usedcarnearby/usedcarnearby.component';
import { NewsoncarComponent } from './newsoncar/newsoncar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterheadComponent,
    FooterComponent,
    ProductviewComponent,
    HatchbackcarComponent,
    LatestcarComponent,
    UpcomningcarComponent,
    UsedcarComponent,
    UsedcarbugetmenuComponent,
    PopularbrandComponent,
    UsedcarnearbyComponent,
    NewsoncarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
