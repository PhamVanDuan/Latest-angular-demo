import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { InformationsComponent } from './components/informations/informations.component';
import { AddressComponent } from './components/address/address.component';
import { DepartmentComponent } from './components/department/department.component';
import { DiseaseKindComponent } from './components/disease-kind/disease-kind.component';
import { DoctorListComponent } from './screens/doctor/doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './screens/doctor/doctor-detail/doctor-detail.component';
import { DoctorEditComponent } from './screens/doctor/doctor-edit/doctor-edit.component';
import { PatientListComponent } from './screens/patient/patient-list/patient-list.component';
import { PatientDetailComponent } from './screens/patient/patient-detail/patient-detail.component';
import { PatientEditComponent } from './screens/patient/patient-edit/patient-edit.component';
import { DoctorItemComponent } from './screens/doctor/doctor-list/doctor-item/doctor-item.component';
import { PatientItemComponent } from './screens/patient/patient-list/patient-item/patient-item.component';
import {DoctorService} from './services/doctor.service';
import {PatientService} from './services/patient.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    InformationsComponent,
    AddressComponent,
    DepartmentComponent,
    DiseaseKindComponent,
    DoctorListComponent,
    DoctorDetailComponent,
    DoctorEditComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientEditComponent,
    DoctorItemComponent,
    PatientItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DoctorService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
