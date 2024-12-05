import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    const isAppCreated = appInstance !== null;
    expect(isAppCreated).toBeTruthy();
  });

  it(`should have 'notes' as the title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    const expectedTitle = 'notes';
    expect(appInstance.title).toEqual(expectedTitle);
  });

  it('should display title in the rendered output', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement as HTMLElement;
    const headingText = nativeElement.querySelector('h1')?.textContent;
    expect(headingText).toContain('Hello, notes');
  });
});
