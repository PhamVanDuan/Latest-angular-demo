import { PatientModel} from '../modules/patient.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';

@Injectable()
export class PatientService {
  // informationSelected = new Subject<Information>();

  informationsChanged = new Subject<PatientModel[]>();
  private informations: PatientModel[];
  constructor(private router: Router) {
    this.informations = [];
  }

  setInformations(informations: PatientModel[]) {
    this.informations = informations;
    this.informationsChanged.next(this.informations.slice());
  }

  getInformations() {
    return this.informations.slice();
  }

  getInformation(index: number) {
    return this.informations[index];
  }

  addInformation(information: PatientModel) {
    this.informations.push(information);
    this.informationsChanged.next(this.informations.slice());
  }

  updateInformation(index: number, newInformation: PatientModel) {
    this.informations[index] = newInformation;
    this.informationsChanged.next(this.informations.slice());
  }

  deleteInformation(index: number) {
    this.informations.splice(index, 1);
    this.informationsChanged.next(this.informations.slice());
  }
}
