import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  template: ` <div>
    <top-bar />
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'lloyd-honey';
}
