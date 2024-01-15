import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkillsMobileComponent } from './page-skills-mobile.component';

describe('PageSkillsMobileComponent', () => {
  let component: PageSkillsMobileComponent;
  let fixture: ComponentFixture<PageSkillsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSkillsMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSkillsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
