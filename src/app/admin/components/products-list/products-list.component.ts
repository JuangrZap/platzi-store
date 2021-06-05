import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
    products: Product[] = [];
    displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.fetchProducts();
    }

    fetchProducts(): void {
        this.productsService.getAllProducts().subscribe((products) => {
            console.log(products);
            this.products = products;
        });
    }

    createProduct(): void {
        const newProduct: Product = {
            id: '222',
            title: 'New product',
            image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/camiseta.png',
            price: 50000,
            description: 'new product',
        };

        this.productsService.createProduct(newProduct).subscribe((product) => {
            console.log(product);
            this.fetchProducts();
        });
    }

    updateProduct(id: string): void {
        const editProduct: Partial<Product> = {
            title: 'Edit product 2',
            price: 1005000,
        };

        this.productsService
            .updateProduct(id, editProduct)
            .subscribe((product) => {
                console.log(product);
                this.fetchProducts();
            });
    }

    deleteProduct(id: string): void {
        this.productsService.deleteProduct(id).subscribe((product) => {
            console.log(product);
            this.fetchProducts();
        });
    }
}
