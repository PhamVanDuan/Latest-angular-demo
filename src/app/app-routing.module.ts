import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoctorListComponent} from './screens/doctor/doctor-list/doctor-list.component';
import {DoctorEditComponent} from './screens/doctor/doctor-edit/doctor-edit.component';
import {DoctorDetailComponent} from './screens/doctor/doctor-detail/doctor-detail.component';
import {PatientListComponent} from './screens/patient/patient-list/patient-list.component';
import {PatientEditComponent} from './screens/patient/patient-edit/patient-edit.component';
import {PatientDetailComponent} from './screens/patient/patient-detail/patient-detail.component';



const routes: Routes = [
//  { path: '', redirectTo: '/docter', pathMatch: 'full' },
  { path: 'doctor', component: DoctorListComponent, children: [
      { path: 'new', component: DoctorEditComponent },
      { path: ':id', component: DoctorDetailComponent },
      { path: ':id/edit', component: DoctorEditComponent }
    ] },

  { path: 'patient', component: PatientListComponent, children: [
      { path: 'new', component: PatientEditComponent },
      { path: ':id', component: PatientDetailComponent },
      { path: ':id/edit', component: PatientEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
