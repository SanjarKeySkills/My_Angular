import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ProductPageComponent } from "./pages/product-pade/product-page.component";
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ModalComponent } from './components/modal/modal.component';
import {SearchProductsPipe} from "./pipes/search-products.pipe";

// start of appliance
@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ProductPageComponent,
    NavigationComponent,
    ProductComponent,
    ModalComponent,
    SearchProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
