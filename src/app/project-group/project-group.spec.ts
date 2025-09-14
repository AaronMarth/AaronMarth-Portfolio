import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGroup } from './project-group';

describe('ProjectGroup', () => {
  let component: ProjectGroup;
  let fixture: ComponentFixture<ProjectGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
