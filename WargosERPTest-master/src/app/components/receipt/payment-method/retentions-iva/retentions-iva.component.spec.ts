import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionsIvaComponent } from './retentions-iva.component';

describe('RetentionsIvaComponent', () => {
  let component: RetentionsIvaComponent;
  let fixture: ComponentFixture<RetentionsIvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionsIvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionsIvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
