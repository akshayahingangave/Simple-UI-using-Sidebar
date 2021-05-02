import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CovidComponent } from './covid/covid.component'

import { CardiologyComponent } from './sidebar/cardiology/cardiology.component';
import { ChildspecialComponent } from './sidebar/childspecial/childspecial.component';
import { DentistComponent } from './sidebar/dentist/dentist.component';
import { DermatologyComponent } from './sidebar/dermatology/dermatology.component';
import { EntspecialComponent } from './sidebar/entspecial/entspecial.component';
import { GynaecologyComponent } from './sidebar/gynaecology/gynaecology.component';
import { NephrologyComponent } from './sidebar/nephrology/nephrology.component';
import { NeurologyComponent } from './sidebar/neurology/neurology.component';
import { OrthopaedicComponent } from './sidebar/orthopaedic/orthopaedic.component';
import { PaediatricsComponent } from './sidebar/paediatrics/paediatrics.component';
import { PhysicianComponent } from './sidebar/physician/physician.component';
import { PsychologyComponent } from './sidebar/psychology/psychology.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"about", component:AboutComponent },
  { path:"contact", component:ContactComponent },
  { path:"gallary", component:GalleryComponent },
  { path:"faqs", component:FaqsComponent },
  {path:"covid", component:CovidComponent},
  
  { path:"cardio", component:CardiologyComponent },
  { path:"child", component:ChildspecialComponent },
  { path:"dentist", component:DentistComponent },
  { path:"dermato", component:DermatologyComponent },
  { path:"ent", component:EntspecialComponent },
  { path:"gynac", component:GynaecologyComponent },
  { path:"nephro", component:NephrologyComponent },
  { path:"neuro", component:NeurologyComponent },
  { path:"ortho", component:OrthopaedicComponent },
  { path:"paedietric", component:PaediatricsComponent },
  { path:"physician", component:PhysicianComponent },
  { path:"psycho", component:PsychologyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
