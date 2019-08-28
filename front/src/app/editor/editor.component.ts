import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public service: ResumeService) { }

  ngOnInit() {
  }

}
