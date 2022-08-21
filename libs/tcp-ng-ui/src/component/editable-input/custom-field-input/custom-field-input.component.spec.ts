import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldInputComponent } from '@tcp/tcp-ng-ui';

describe('CustomFieldInputComponent', () => {
  let component: CustomFieldInputComponent;
  let fixture: ComponentFixture<CustomFieldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFieldInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
