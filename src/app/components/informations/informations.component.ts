import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  @Input() information: any;

  constructor() {
  }

  ngOnInit() {
  }
}
