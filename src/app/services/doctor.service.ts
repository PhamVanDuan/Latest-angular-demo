import { DoctorModel} from '../modules/doctor.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {nullSafeIsEquivalent} from '@angular/compiler/src/output/output_ast';


@Injectable()
export class DoctorService {
  // informationSelected = new Subject<Information>();

  informationsChanged = new Subject<DoctorModel[]>();
  private informations: DoctorModel[];

  constructor(private router: Router, private http: HttpClient, ) {
    this.informations = [];
  }

  setInformations(informations: DoctorModel[]) {
    this.informations = informations;
    this.informationsChanged.next(this.informations.slice());
  }

  getInformations() {
    return this.informations.slice();
  }

  getInformation(index: number) {
    return this.informations[index];
  }

  addInformation(information: DoctorModel) {
    this.informations.push(information);
    this.informationsChanged.next(this.informations.slice());
  }

  updateInformation(index: number, newInformation: DoctorModel) {
    this.informations[index] = newInformation;
    this.informationsChanged.next(this.informations.slice());
  }

  deleteInformation(index: number) {
    this.informations.splice(index, 1);
    this.informationsChanged.next(this.informations.slice());
  }
}
