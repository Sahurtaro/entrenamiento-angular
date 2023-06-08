import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  criteria = '';
  cities = ['Barcelona', 'Madrid', 'Sevilla', 'Bilbao', 'Salamanca'];
  name!: string;
  selection!: string;
  url =
    'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51';
  title = 'Día 4 del reto';

  addNewCity(city: string): void {
    this.cities.push(city);
  }
  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }
  onClear(): void {
    this.selection = '';
  }
}
