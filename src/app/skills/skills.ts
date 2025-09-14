import { Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { Chip } from '../chip/chip';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, Chip],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  protected readonly skills = [
      "Swift", 
      "Python",
      "Angular", 
      "JavaScript",
      "TypeScript", 
      "Batch Scripting", 
      "C", 
      "PHP", 
      "Java"
  ]

  protected readonly miscellaneous = [
    "CI/CD",
    "Playwright",
    "Git",
    "Agile Methodologies",
  ]

}