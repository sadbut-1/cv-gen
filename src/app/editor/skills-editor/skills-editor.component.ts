import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-skills-editor',
  templateUrl: './skills-editor.component.html',
  styleUrls: ['./skills-editor.component.scss']
})
export class SkillsEditorComponent implements OnInit {

  skill = {};
  show_form = false;

  constructor(public service: ResumeService) { }

  ngOnInit() {
  }

  insertSkill() {
    if (this.skill['skill']) {
      this.service.resume.skills.push(this.skill);
    }
    this.skill = {};
    this.showForm()
  }

  showForm() {
    this.show_form = !this.show_form;
  }

}
