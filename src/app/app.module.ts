import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProductsComponent } from '../components/products/products.component';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {RatingStarsPipe} from './pipes/rating-star-pipe';
import {ProductFilterPipe} from './pipes/product-filter-pipe';


@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, ProductsComponent],
  imports: [BrowserModule, FormsModule, RatingStarsPipe,ProductFilterPipe],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
