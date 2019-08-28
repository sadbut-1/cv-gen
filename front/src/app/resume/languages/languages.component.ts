import { Component, OnInit, Input } from '@angular/core';
import { resume } from 'src/app/app.module';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input()
  resume;

  constructor() { }

  ngOnInit() {
  }

}
