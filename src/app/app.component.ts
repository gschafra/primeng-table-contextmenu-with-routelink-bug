import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng-lts';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng9App';
  products: Observable<Product[]>;

  selectedProduct: Product;

  items: MenuItem[];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProductsSmall();

    this.items = [
      {
        label: 'View',
        icon: 'pi pi-fw pi-search',
        routerLink: ['1']
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
        command: () => this.deleteProduct(this.selectedProduct)
      }
    ];
  }

  viewProduct(product: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: product.name
    });
  }

  deleteProduct(product: Product) {
    // this.products = this.products.filter(p => p.id !== product.id);
    this.messageService.add({
      severity: 'info',
      summary: 'Product Deleted',
      detail: product.name
    });
    this.selectedProduct = null;
  }
}
