import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  imports: [],
  templateUrl: './chip.html',
  styleUrl: './chip.scss'
})
export class Chip {
  public readonly text = input.required<string>();
}
