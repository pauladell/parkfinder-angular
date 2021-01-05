import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DirectoryComponent } from './directory/directory.component';
import { CouponsComponent } from './coupons/coupons.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    DirectoryComponent,
    CouponsComponent,
    FooterComponent,
    MapComponent,
    ContactComponent,
    ProfileComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
