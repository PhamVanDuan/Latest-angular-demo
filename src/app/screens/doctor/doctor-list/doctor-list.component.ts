import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorModel } from '../../../modules/doctor.model';
import { DoctorService} from '../../../services/doctor.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit, OnDestroy {
  doctors: DoctorModel[];
  subscription: Subscription;
  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) {}
  ngOnInit() {

    this.subscription = this.doctorService.informationsChanged.subscribe(
      (doctors: DoctorModel[]) => {
        this.doctors = doctors;

      }
      );
    this.dataStorageService.loadDoctor();
    this.doctors = this.doctorService.getInformations();

  }

  onNewInformation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
