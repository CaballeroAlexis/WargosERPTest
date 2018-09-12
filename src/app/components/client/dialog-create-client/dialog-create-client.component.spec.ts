import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateClientComponent } from './dialog-create-client.component';

describe('DialogCreateClientComponent', () => {
  let component: DialogCreateClientComponent;
  let fixture: ComponentFixture<DialogCreateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
