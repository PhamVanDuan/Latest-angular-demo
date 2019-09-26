import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DoctorService} from '../services/doctor.service';
import {DoctorModel} from '../modules/doctor.model';
import { PatientService } from '../services/patient.service';
import { PatientModel } from '../modules/patient.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private doctorService: DoctorService,
              private patientService: PatientService) {}

  storeDoctorInformations() {
    const doctor = this.doctorService.getInformations();
    return this.http.put('https://angular-demo-90332.firebaseio.com/doctor.json', doctor)
      .subscribe(response => {
        console.log(response);
      });
  }
  storePatientInformations() {
    const patient = this.patientService.getInformations();
    return this.http.put('https://angular-demo-90332.firebaseio.com/patient.json', patient)
      .subscribe(response => {
        console.log(response);
      });
  }

  loadDoctor() {
    this.http.get<DoctorModel[]>('https://angular-demo-90332.firebaseio.com/doctor.json')
      .subscribe(doctor => {
        this.doctorService.setInformations(doctor);
      });
  }
  loadPatient() {
    this.http.get<PatientModel[]>('https://angular-demo-90332.firebaseio.com/patient.json')
      .subscribe(patient => {
        this.patientService.setInformations(patient);
      });
  }
}
