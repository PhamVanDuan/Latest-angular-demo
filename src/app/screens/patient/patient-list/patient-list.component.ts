import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientModel } from '../../../modules/patient.model';
import {PatientService} from '../../../services/patient.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/data-storage.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients: PatientModel[];
  subscription: Subscription;
  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) {}
  ngOnInit() {

    this.subscription = this.patientService.informationsChanged.subscribe(
      (patients: PatientModel[]) => {
        this.patients = patients;
      }
    );
    this.dataStorageService.loadPatient();
    this.patients = this.patientService.getInformations();
  }
  onNewInformation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
