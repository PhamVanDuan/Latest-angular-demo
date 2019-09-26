export class PatientModel {
  public name: string;
  public gender: string;
  public birthday: string;
  public address: string;
  public city: string;
  public country: string;
  public diseaseKind: string;

  constructor(name: string, gender: string, birthday: string,
              address: string, city: string, country: string,
              diseaseKind: string){
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.address = address;
    this.city = city;
    this.country = country;
    this.diseaseKind = diseaseKind;
  }
}
