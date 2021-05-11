import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TcpNgUiModule } from '@tcp/tcp-ng-ui';
import { RouterTestingModule } from '@angular/router/testing';
import { LogOnComponent } from './features/log-on/log-on.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, LogOnComponent],
      imports: [RouterTestingModule, TcpNgUiModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'clock-status'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('clock-status');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content')).not.toBeUndefined();
  });
});
