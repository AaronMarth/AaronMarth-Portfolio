import { CommonModule } from '@angular/common';
import { Component, input, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss'
})
export class SectionHeader {
  public readonly icon = input<TemplateRef<SVGElement>>();
  public readonly name = input.required<string>();
  public readonly fontSize = input<number>(2);
$: any;
}
