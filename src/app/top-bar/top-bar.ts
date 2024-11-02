import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LloydHoneyLogoComponent } from '../../icons/lloyd-honey-logo';
import { IconListComponent } from './icon-list';

@Component({
  selector: 'top-bar',
  standalone: true,
  template: `
    <div
      class="flex h-16 w-full flex-row bg-white md:grid md:h-24 md:grid-cols-5 md:justify-center md:drop-shadow-lg"
    >
      <div
        class="col-span-2 hidden flex-grow justify-center gap-6 self-end pb-8 text-xl text-brand-brown md:flex lg:gap-9"
      >
        <div class="cursor-pointer" routerLink="/Products">Products</div>
        <div class="cursor-pointer" routerLink="/Recipes">Recipes</div>
        <div class="cursor-pointer" routerLink="/About-Us">About us</div>
      </div>
      <div
        class="cursor-pointer self-end pb-1.5 pl-2 md:mx-auto md:self-center md:pb-0 md:pl-0"
        routerLink="/"
      >
        <lloyd-honey-logo />
      </div>
      <div class="hidden flex-grow justify-center md:flex">
        <icon-list />
      </div>
      <div class="mx-auto hidden h-9 w-32 self-center md:flex">
        <img src="images/social-media.png" alt="social Media icon" />
      </div>
      <div class="ml-auto md:hidden">
        <icon-list [showBurgerMenu]="true" />
      </div>
    </div>
  `,
  imports: [LloydHoneyLogoComponent, IconListComponent, RouterLink]
})
export class TopBarComponent {}
