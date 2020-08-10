import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpageV2Component } from './endpage-v2.component';

describe('EndpageV2Component', () => {
  let component: EndpageV2Component;
  let fixture: ComponentFixture<EndpageV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpageV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpageV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
