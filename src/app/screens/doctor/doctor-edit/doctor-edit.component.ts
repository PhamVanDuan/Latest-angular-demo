import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DoctorService } from '../../../services/doctor.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  id: number;
  editMode = false;
  informationForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private doctorService: DoctorService,
              private router: Router,
              private dataStorageService: DataStorageService) {

  }

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
        this.doctorService.updateInformation(this.id, this.informationForm.value);
      } else {
        this.doctorService.addInformation(this.informationForm.value);
      }
      this.dataStorageService.storeDoctorInformations();
      this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let name = '', gender = '', birthday = '';
    let address = '', city = '', country = '';
    let departmentName = '', discription = '';
    if (this.editMode) {
      const information = this.doctorService.getInformation(this.id);
      name = information.name;
      gender = information.gender;
      birthday = information.birthday;
      address = information.address;
      city = information.city;
      country = information.country;
      departmentName = information.departmentName;
      discription = information.discription;
    }
    this.informationForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      gender: new FormControl(gender),
      birthday: new FormControl(birthday),
      address: new FormControl(address),
      city: new FormControl(city),
      country: new FormControl(country),
      departmentName: new FormControl(departmentName),
      discription: new FormControl(discription)
    });
  }

}
