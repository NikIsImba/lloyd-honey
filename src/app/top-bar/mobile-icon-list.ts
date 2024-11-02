import { Component, Input } from '@angular/core';
import { BurgermenuIconComponent } from '../../icons/burgermenu-icon';
import { HeartIconComponent } from '../../icons/heart-icon';
import { ProfileIconComponent } from '../../icons/profile-icon';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon';

@Component({
  selector: 'icon-list',
  standalone: true,
  template: `
    <div class="flex h-full flex-row gap-4 px-5 lg:gap-10">
      <div class="self-center">
        <profile-icon />
      </div>
      <div class="self-center">
        <heart-icon />
      </div>
      <div class="self-center">
        <shopping-cart-icon />
      </div>
      @if (showBurgerMenu) {
        <div class="self-center">
          <burgermenu-icon />
        </div>
      }
    </div>
  `,
  imports: [
    ShoppingCartIconComponent,
    HeartIconComponent,
    ProfileIconComponent,
    BurgermenuIconComponent
  ]
})
export class IconListComponent {
  @Input() showBurgerMenu = false;
}
