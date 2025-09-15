import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { ProjectGroup } from '../project-group/project-group';

export interface Project {
  name: string;
  madeWith: string[];
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, ProjectGroup],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  
    projects: Project[] = [
    {
      name: "lorum",
      madeWith: ["lorum"],
      description: "lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum lorum",
      image: "https://slp-statics.astockcdn.net/static_assets/staging/25spring/US_homepage/HP_storytelling_1439510772.jpg?width=580"
    }
  ]
}