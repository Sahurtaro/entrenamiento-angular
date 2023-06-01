import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities = ['Barcelona', 'Madrid', 'Sevilla', 'Bilbao', 'Salamanca'];
  name!: string;
  selection!: string;
  url =
    'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51';
  title = 'Día 4 del reto';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes);
  }
  ngOnInit(): void {
    console.log('OnInit ->');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }
  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }
  onClear(): void {
    this.selection = '';
  }
}
