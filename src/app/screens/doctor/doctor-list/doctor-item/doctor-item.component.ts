import { Component, OnInit, Input } from '@angular/core';
import { DoctorModel } from '../../../../modules/doctor.model';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {
  @Input() doctor: DoctorModel;
  @Input() index: number;
  constructor(){}
  ngOnInit() {
  }

}
