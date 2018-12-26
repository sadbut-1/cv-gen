import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-languages-editor',
  templateUrl: './languages-editor.component.html',
  styleUrls: ['./languages-editor.component.scss']
})
export class LanguagesEditorComponent implements OnInit {

  language = {};
  show_form = false;

  constructor(public service: ResumeService) { }

  ngOnInit() {
  }

  insertLanguage() {
    if (this.language['language']) {
      this.service.resume.languages.push(this.language);
    }
    this.showForm();
    this.language = {};
  }

  showForm() {
    this.show_form = !this.show_form;
  }

}
