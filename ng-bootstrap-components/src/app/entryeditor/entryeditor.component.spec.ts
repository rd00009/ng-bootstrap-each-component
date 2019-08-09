import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryeditorComponent } from './entryeditor.component';

describe('EntryeditorComponent', () => {
  let component: EntryeditorComponent;
  let fixture: ComponentFixture<EntryeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
