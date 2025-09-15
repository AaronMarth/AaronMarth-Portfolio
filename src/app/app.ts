import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Introduction } from "./introduction/introduction";
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Introduction, About, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AaronMarth-Portfolio');
}
