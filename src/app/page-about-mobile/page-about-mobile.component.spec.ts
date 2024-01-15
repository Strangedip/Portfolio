import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMobileComponent } from './page-about-mobile.component';

describe('PageAboutMobileComponent', () => {
  let component: PageAboutMobileComponent;
  let fixture: ComponentFixture<PageAboutMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
