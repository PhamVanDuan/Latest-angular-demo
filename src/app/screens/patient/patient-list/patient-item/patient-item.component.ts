import { Component, OnInit, Input } from '@angular/core';
import { PatientModel } from '../../../../modules/patient.model';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {
  @Input() patient: PatientModel;
  @Input() index: number;
  constructor(){}
  ngOnInit() {
  }

}
