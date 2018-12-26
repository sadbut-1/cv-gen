import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  resume;

  constructor(private http: HttpClient) { }

  getResume() {
    return this.resume;
  }

  loadResume() {
    return new Promise((resolve, reject) => {
      this.http.get<any>('../assets/resume.json').subscribe(response => {
        this.http.get<any>('../assets/translate.json').subscribe(translation => {
          this.resume = response;
          this.resume['lang'] = 'pt';
          this.resume['translation'] = translation;
          resolve(true);
        })
      })
    })
  }
}

