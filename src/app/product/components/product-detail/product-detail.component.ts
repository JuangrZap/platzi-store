import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    idProduct: string;
    isLoading = false;

    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.idProduct = params.id;
            this.isLoading = true;
            this.fetchProduct(this.idProduct);
        });
    }

    fetchProduct(id: string): void {
        this.productsService.getProduct(id).subscribe((product) => {
            this.product = product;
            if (this.product) {
                this.isLoading = false;
            }
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
            this.fetchProduct(this.idProduct);
        });
    }

    updateProduct(): void {
        const editProduct: Partial<Product> = {
            title: 'Edit product 2',
            price: 1005000,
        };

        this.productsService
            .updateProduct('222', editProduct)
            .subscribe((product) => {
                console.log(product);
                this.fetchProduct(this.idProduct);
            });
    }

    deleteProduct(): void {
        this.productsService
            .deleteProduct(this.idProduct)
            .subscribe((product) => {
                console.log(product);
            });
    }
}
