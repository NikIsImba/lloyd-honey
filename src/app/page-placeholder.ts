import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-placeholder',
  standalone: true,
  template: `
    <div class="flex h-full flex-col items-center justify-center">
      <div class="text-3xl font-bold">{{ pageName }} Placeholder</div>
      <div class="text-xl">
        This is a placeholder for a {{ pageName }} page.
      </div>
    </div>
  `
})
export class PagePlaceholderComponent {
  @Input() pageName = 'unknown';

  constructor(route: ActivatedRoute) {
    this.pageName = route.snapshot.data['pageName'] ?? this.pageName;
  }
}
