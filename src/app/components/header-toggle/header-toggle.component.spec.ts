import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderToggleComponent } from "./header-toggle.component";

describe('HeaderToggleComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderToggleComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderToggleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
