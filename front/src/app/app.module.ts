import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { EmploymentHistoryComponent } from './resume/employment-history/employment-history.component';

import { ResumeService } from './services/resume.service';
import { EducationComponent } from './resume/education/education.component';
import { DetailsComponent } from './resume/details/details.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { EditorComponent } from './editor/editor.component';
import { EmploymentHistoryEditorComponent } from './editor/employment-history-editor/employment-history-editor.component';
import { EducationEditorComponent } from './editor/education-editor/education-editor.component';
import { SkillsEditorComponent } from './editor/skills-editor/skills-editor.component';
import { LanguagesEditorComponent } from './editor/languages-editor/languages-editor.component';
import { DetailsEditorComponent } from './editor/details-editor/details-editor.component';
import { ProfileEditorComponent } from './editor/profile-editor/profile-editor.component';

export function resume(resumeService: ResumeService) {
  return () => resumeService.loadResume();
}

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProfileComponent,
    EmploymentHistoryComponent,
    EducationComponent,
    DetailsComponent,
    SkillsComponent,
    LanguagesComponent,
    EditorComponent,
    EmploymentHistoryEditorComponent,
    EducationEditorComponent,
    SkillsEditorComponent,
    LanguagesEditorComponent,
    DetailsEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEditorModule
  ],
  providers: [
    { provide: APP_INITIALIZER,
      useFactory: resume, 
      deps: [ResumeService], 
      multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
