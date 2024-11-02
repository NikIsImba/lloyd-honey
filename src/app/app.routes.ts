import { Routes } from '@angular/router';
import { PagePlaceholderComponent } from './page-placeholder';

export const routes: Routes = [
  {
    path: '',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'Homepage'
    }
  },
  {
    path: 'Products',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'Products'
    }
  },
  {
    path: 'Recipes',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'Recipes'
    }
  },
  {
    path: 'About-Us',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'About Us'
    }
  },
  {
    path: 'Account',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'Account'
    }
  },
  {
    path: 'Wishlist',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'Wishlist'
    }
  },
  {
    path: 'Cart',
    component: PagePlaceholderComponent,
    data: {
      pageName: 'Cart'
    }
  }
];
