import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PgEditableInputComponent } from './features/pg-editable-input/pg-editable-input.component';
import { TcpNgUiModule } from '@tcp/tcp-ng-ui';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, PgEditableInputComponent],
      imports: [RouterTestingModule, TcpNgUiModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'playground'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('playground');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content')).not.toBeUndefined();
  });
});
