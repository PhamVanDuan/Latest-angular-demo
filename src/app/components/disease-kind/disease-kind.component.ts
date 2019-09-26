import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disease-kind',
  templateUrl: './disease-kind.component.html',
  styleUrls: ['./disease-kind.component.css']
})
export class DiseaseKindComponent implements OnInit {
  @Input() disease: any;
  constructor() { }

  ngOnInit() { }
}
