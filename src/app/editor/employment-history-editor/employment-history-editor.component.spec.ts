import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHistoryEditorComponent } from './employment-history-editor.component';

describe('EmploymentHistoryEditorComponent', () => {
  let component: EmploymentHistoryEditorComponent;
  let fixture: ComponentFixture<EmploymentHistoryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentHistoryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentHistoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
