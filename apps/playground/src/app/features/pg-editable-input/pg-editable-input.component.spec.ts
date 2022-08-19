import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEditableInputComponent } from './pg-editable-input.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TcpNgUiModule } from '@tcp/tcp-ng-ui';

describe('PgEditableInputComponent', () => {
  let component: PgEditableInputComponent;
  let fixture: ComponentFixture<PgEditableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgEditableInputComponent],
      imports: [RouterTestingModule, TcpNgUiModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgEditableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
