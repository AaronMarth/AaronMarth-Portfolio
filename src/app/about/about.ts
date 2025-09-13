import { Component } from '@angular/core';
import { Education } from "../education/education";
import { Experience } from "../experience/experience";
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-about',
  imports: [Education, Experience, SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
