import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Introduction } from "./introduction/introduction";
import { About } from "./about/about";
import { Skills } from "./skills/skills";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Introduction, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AaronMarth-Portfolio');
}
