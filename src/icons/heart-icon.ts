import { Component } from '@angular/core';

@Component({
  selector: 'heart-icon',
  standalone: true,
  template: `
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.75775 15.5182C1.17935 13.9255 0.205223 11.7384 0.205223 9.32497C0.205223 4.45303 4.17483 0.50354 9.07158 0.50354C11.7197 0.50354 14.0967 1.65861 15.7214 3.48998C17.346 1.65861 19.723 0.50354 22.3711 0.50354C27.2679 0.50354 31.2375 4.45303 31.2375 9.32497C31.2375 11.7385 30.2633 13.9256 28.6849 15.5183L15.7213 30.4964L2.75775 15.5182Z"
        fill="#594242"
      />
    </svg>
  `
})
export class HeartIconComponent {}
