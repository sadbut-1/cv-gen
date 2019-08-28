import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-details-editor',
  templateUrl: './details-editor.component.html',
  styleUrls: ['./details-editor.component.scss']
})
export class DetailsEditorComponent implements OnInit {

  edit_input = false;

  constructor(public service: ResumeService) { }

  ngOnInit() {
  }

  editDetails() {
    this.edit_input = !this.edit_input;
  }

}
