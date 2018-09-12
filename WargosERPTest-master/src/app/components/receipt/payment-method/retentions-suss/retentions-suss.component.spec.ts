import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionsSUSSComponent } from './retentions-suss.component';

describe('RetentionsSUSSComponent', () => {
  let component: RetentionsSUSSComponent;
  let fixture: ComponentFixture<RetentionsSUSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionsSUSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionsSUSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
