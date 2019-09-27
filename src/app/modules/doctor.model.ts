export class DoctorModel {
  public name: string;
  public gender: string;
  public birthday: string;
  public address: string;
  public city: string;
  public country: string;
  public departmentName: string;
  public description: string;

  constructor(name: string, gender: string, birthday: string,
              address: string, city: string, country: string,
              departmentName: string, description: string) {
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.address = address;
    this.city = city;
    this.country = country;
    this.departmentName = departmentName;
    this.description = description;
  }
}
