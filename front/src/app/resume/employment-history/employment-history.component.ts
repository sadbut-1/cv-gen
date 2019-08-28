import { Component, OnInit, Input } from '@angular/core';
import { resume } from 'src/app/app.module';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent implements OnInit {

  @Input()
  resume;

  constructor() { }

  ngOnInit() {
  }

}
