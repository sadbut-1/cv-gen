import { Component, OnInit, Input } from '@angular/core';
import { resume } from 'src/app/app.module';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input()
  resume;

  constructor() { }

  ngOnInit() {}

}
