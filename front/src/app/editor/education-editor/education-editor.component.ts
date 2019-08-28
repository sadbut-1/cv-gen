import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-education-editor',
  templateUrl: './education-editor.component.html',
  styleUrls: ['./education-editor.component.scss']
})
export class EducationEditorComponent implements OnInit {

  education = {};
  editorConfig = {};
  show_form = false;

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

  constructor(public service: ResumeService) { }

  ngOnInit() {
    this.editorConfig['toolbar'] = [
      ["bold", "italic", "underline", "superscript", "subscript"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
      ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
    ]
    this.editorConfig['minHeight'] = "15"
  }

  insertEducation() {
    if (this.education['degree']) {
      this.service.resume.education.push(this.education);
    }
    this.show_form = !this.show_form;
    this.education = {};
  }

  showForm() {
    this.show_form = !this.show_form;
  }

}
