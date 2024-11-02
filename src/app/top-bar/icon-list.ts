import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BurgermenuIconComponent } from '../../icons/burgermenu-icon';
import { HeartIconComponent } from '../../icons/heart-icon';
import { ProfileIconComponent } from '../../icons/profile-icon';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon';

@Component({
  selector: 'icon-list',
  standalone: true,
  template: `
    <div class="flex h-full flex-row gap-4 px-5 lg:gap-10">
      <div class="cursor-pointer self-center" routerLink="/Account">
        <profile-icon />
      </div>
      <div class="cursor-pointer self-center" routerLink="/Wishlist">
        <heart-icon />
      </div>
      <div class="cursor-pointer self-center" routerLink="/Cart">
        <shopping-cart-icon />
      </div>
      @if (showBurgerMenu) {
        <div class="cursor-pointer self-center" (click)="onClick()">
          <burgermenu-icon />
        </div>
      }
    </div>
  `,
  imports: [
    ShoppingCartIconComponent,
    HeartIconComponent,
    ProfileIconComponent,
    BurgermenuIconComponent,
    RouterLink
  ]
})
export class IconListComponent {
  @Input() showBurgerMenu = false;
  @Output() onBurgerMenuClick = new EventEmitter();

  onClick() {
    this.onBurgerMenuClick.emit();
  }
}
