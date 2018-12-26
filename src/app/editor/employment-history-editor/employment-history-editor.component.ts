import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-employment-history-editor',
  templateUrl: './employment-history-editor.component.html',
  styleUrls: ['./employment-history-editor.component.scss']
})
export class EmploymentHistoryEditorComponent implements OnInit {

  employment = {}
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

  insertJob() {
    if (this.employment['job_title']) {
      this.service.resume.employment_history.push(this.employment);
      this.employment = {};
    }
    this.showForm();
  }

  showForm() {
    this.show_form = !this.show_form;
  }

}
