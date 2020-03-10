import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOutputComponent } from './generate-output.component';

describe('GenerateOutputComponent', () => {
  let component: GenerateOutputComponent;
  let fixture: ComponentFixture<GenerateOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
