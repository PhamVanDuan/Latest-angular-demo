import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { PatientService } from '../../../services/patient.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  id: number;
  editMode = false;
  informationForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }
  onSubmit() {
    // console.log(this.informationForm);
    // const newInformation = new Information(
    //     this.informationForm.value['name'],
    //     this.informationForm.value['gender'],
    //     .....
    // )
    if (this.editMode) {
      // this.informationService.updateInformation(this.id, newInformation);
      this.patientService.updateInformation(this.id, this.informationForm.value);
    } else {
      this.patientService.addInformation(this.informationForm.value);
    }
    this.dataStorageService.storePatientInformations();
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let name = '', gender = '', birthday = '';
    let address = '', city = '', country = '';
    let diseaseKind = '';
    if (this.editMode) {
      const information = this.patientService.getInformation(this.id);
      name = information.name;
      gender = information.gender;
      birthday = information.birthday;
      address = information.address;
      city = information.city;
      country = information.country;
      diseaseKind = information.diseaseKind
    }
    this.informationForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      gender: new FormControl(gender),
      birthday: new FormControl(birthday),
      address: new FormControl(address),
      city: new FormControl(city),
      country: new FormControl(country),
      diseaseKind: new FormControl(diseaseKind),
    });
  }

}
