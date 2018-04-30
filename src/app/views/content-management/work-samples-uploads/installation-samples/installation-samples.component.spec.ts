import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationSamplesComponent } from './installation-samples.component';

describe('InstallationSamplesComponent', () => {
  let component: InstallationSamplesComponent;
  let fixture: ComponentFixture<InstallationSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
