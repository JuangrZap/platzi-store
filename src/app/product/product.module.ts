import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductRoutingModule } from './product-routing.module';

// Components
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
    declarations: [ProductComponent, ProductsComponent, ProductDetailComponent],
    imports: [CommonModule, ProductRoutingModule, SharedModule, MaterialModule],
})
export class ProductModule {}
