import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorModel} from '../../../modules/doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
  doctorDetail: DoctorModel;
  id: number;
  constructor(private doctorService: DoctorService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
          this.doctorDetail = this.doctorService.getInformation(this.id);
      });
  }
  onEditInformation() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteInformation() {
    this.doctorService.deleteInformation(this.id);
    this.dataStorageService.storeDoctorInformations();
    this.router.navigate(['/doctor']);
  }

}

