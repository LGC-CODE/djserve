import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSamplesUploadsComponent } from './work-samples-uploads.component';

describe('WorkSamplesUploadsComponent', () => {
  let component: WorkSamplesUploadsComponent;
  let fixture: ComponentFixture<WorkSamplesUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSamplesUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSamplesUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
