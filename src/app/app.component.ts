import { Component } from '@angular/core';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-cli welcome to Angular, A Modular SPA Framework !';
  constructor(productService: ProductService) {
    console.log('[app.component] productService', productService);
  }
}
