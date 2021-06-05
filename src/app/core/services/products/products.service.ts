import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_PRODUCTS: string = `${environment.url_api}/products`;
@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    // products: Product[] = [
    //     {
    //         id: '1',
    //         image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/camiseta.png',
    //         title: 'Camiseta',
    //         price: 80000,
    //         description: 'bla bla bla bla bla',
    //     },
    //     {
    //         id: '2',
    //         image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/hoodie.png',
    //         title: 'Hoodie',
    //         price: 80000,
    //         description: 'bla bla bla bla bla',
    //     },
    //     {
    //         id: '3',
    //         image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/mug.png',
    //         title: 'Mug',
    //         price: 80000,
    //         description: 'bla bla bla bla bla',
    //     },
    //     {
    //         id: '4',
    //         image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/stickers1.png',
    //         title: 'Stickers',
    //         price: 80000,
    //         description: 'bla bla bla bla bla',
    //     },
    //     {
    //         id: '5',
    //         image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/pin.png',
    //         title: 'Pin',
    //         price: 80000,
    //         description: 'bla bla bla bla bla',
    //     },
    //     {
    //         id: '6',
    //         image: 'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/stickers2.png',
    //         title: 'Stickers',
    //         price: 80000,
    //         description: 'bla bla bla bla bla',
    //     },
    // ];

    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(API_PRODUCTS);
    }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`${API_PRODUCTS}/${id}`);
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(API_PRODUCTS, product);
    }

    updateProduct(id: string, product: Partial<Product>): Observable<Product> {
        return this.http.put<Product>(`${API_PRODUCTS}/${id}`, product);
    }

    deleteProduct(id: string): Observable<Product> {
        return this.http.delete<Product>(`${API_PRODUCTS}/${id}`);
    }
}
