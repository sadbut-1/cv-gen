import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume;

  constructor(private service: ResumeService) { }

  ngOnInit() {
    this.resume = this.service.getResume();
  }


}
