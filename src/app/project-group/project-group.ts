import { Component, input } from '@angular/core';
import { Chip } from '../chip/chip';
import { Projects } from '../projects/projects';

interface Project {
  name: string;
  madeWith: string[];
  description: string;
  image: string;
}

@Component({
  selector: 'app-project-group',
  imports: [Chip],
  templateUrl: './project-group.html',
  styleUrl: './project-group.scss'
})
export class ProjectGroup {
  public readonly project = input<Project>();
}
