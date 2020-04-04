import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>
  `,
  styles: [
  ],
})
export class ProductComponent implements OnInit {

  constructor() { 
    console.log('[product.component] constructor');
  }

  ngOnInit(): void {
    console.log('[product.component] ngOnInit');
  }

}
