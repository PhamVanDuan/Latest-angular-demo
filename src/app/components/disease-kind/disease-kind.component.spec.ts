import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseKindComponent } from './disease-kind.component';

describe('DiseaseKindComponent', () => {
  let component: DiseaseKindComponent;
  let fixture: ComponentFixture<DiseaseKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
