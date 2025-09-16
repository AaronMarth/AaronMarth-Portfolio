import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { ProjectGroup } from '../project-group/project-group';

export interface Project {
  name: string;
  madeWith: string[];
  description: string;
  image: string;
  link: string;
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
      name: "StateCollege Bus",
      madeWith: ["Swift", "SwiftUI", "Python", "FastAPI"],
      description: "Appstore published IOS app with over 250 downloads. StateCollege Bus provides residents and visitors of State College with real-time updates on bus locations, arrival times, and service alerts for the CATA bus system. \
      Created using SwiftUI for a pleasing interface and FastAPI for a fast and efficient backend. The backend is hosted on a Google Cloud VM providing reliable uptime to users. The app enables users to easily navigate the bus system,\
       plan their trips, and stay informed about any changes or disruptions in service.",
      image: "../StateCollegeBusIcon.png",
      link: "https://apps.apple.com/us/app/statecollege-bus/id6475539731"
    }
  ]
}