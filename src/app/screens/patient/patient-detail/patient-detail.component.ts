import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PatientModel } from '../../../modules/patient.model';
import { PatientService } from '../../../services/patient.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patientDetail: PatientModel;
  id: number;
  constructor(private patientService: PatientService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.patientDetail = this.patientService.getInformation(this.id);
      });
  }
  onEditInformation() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }
  onDeleteInformation() {
    this.patientService.deleteInformation(this.id);
    this.dataStorageService.storePatientInformations();
    this.router.navigate(['/patient']);
  }

}
