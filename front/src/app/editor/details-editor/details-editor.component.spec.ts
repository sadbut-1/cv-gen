import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditorComponent } from './details-editor.component';

describe('DetailsEditorComponent', () => {
  let component: DetailsEditorComponent;
  let fixture: ComponentFixture<DetailsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
