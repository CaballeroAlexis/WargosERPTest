import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMediaComponent } from './contact-media.component';

describe('ContactMediaComponent', () => {
  let component: ContactMediaComponent;
  let fixture: ComponentFixture<ContactMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
