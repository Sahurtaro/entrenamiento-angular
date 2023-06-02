import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: ` <ul>
    <li
      (click)="onCityClicked(city)"
      [ngClass]="{ 'alert alert-info': city === selection }"
    >
      {{ city }}
    </li>
  </ul>`,
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;
}
