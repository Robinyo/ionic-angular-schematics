import { TestBed, async } from '@angular/core/testing';

import { MyApp } from './app.component';

describe('MyApp', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({<% if (routing) { %>
      imports: [
        RouterTestingModule
      ],<% } %>
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MyApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title '<%= prefix %>'`, async(() => {
    const fixture = TestBed.createComponent(MyApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('<%= prefix %>');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(MyApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to <%= prefix %>!');
  }));
});
