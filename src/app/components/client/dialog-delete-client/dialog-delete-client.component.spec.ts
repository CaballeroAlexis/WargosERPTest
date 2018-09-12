import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteClientComponent } from './dialog-delete-client.component';

describe('DialogDeleteClientComponent', () => {
  let component: DialogDeleteClientComponent;
  let fixture: ComponentFixture<DialogDeleteClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
