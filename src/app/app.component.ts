import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <div>
    <div class="m-6 bg-slate-800">
      <div class="p-4 text-xl text-green-100">Hello {{ title }}</div>
    </div>
    <router-outlet> </router-outlet>
  </div>`
})
export class AppComponent {
  title = 'lloyd-honey';
}
