import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntroMobileComponent } from './page-intro-mobile.component';

describe('PageIntroMobileComponent', () => {
  let component: PageIntroMobileComponent;
  let fixture: ComponentFixture<PageIntroMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIntroMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIntroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
