import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';

import { PhysicianComponent } from './sidebar/physician/physician.component';
import { ChildspecialComponent } from './sidebar/childspecial/childspecial.component';
import { PaediatricsComponent } from './sidebar/paediatrics/paediatrics.component';
import { GynaecologyComponent } from './sidebar/gynaecology/gynaecology.component';
import { DermatologyComponent } from './sidebar/dermatology/dermatology.component';
import { CardiologyComponent } from './sidebar/cardiology/cardiology.component';
import { NeurologyComponent } from './sidebar/neurology/neurology.component';
import { EntspecialComponent } from './sidebar/entspecial/entspecial.component';
import { DentistComponent } from './sidebar/dentist/dentist.component';
import { NephrologyComponent } from './sidebar/nephrology/nephrology.component';
import { OrthopaedicComponent } from './sidebar/orthopaedic/orthopaedic.component';
import { PsychologyComponent } from './sidebar/psychology/psychology.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    FaqsComponent,
    PhysicianComponent,
    ChildspecialComponent,
    PaediatricsComponent,
    GynaecologyComponent,
    DermatologyComponent,
    CardiologyComponent,
    NeurologyComponent,
    EntspecialComponent,
    DentistComponent,
    NephrologyComponent,
    OrthopaedicComponent,
    PsychologyComponent,
    FooterComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
