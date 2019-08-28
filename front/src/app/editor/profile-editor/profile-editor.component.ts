import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  editorConfig = {};
  edit_input = false;

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

  editDetails() {
    this.edit_input = !this.edit_input;
  }

}
