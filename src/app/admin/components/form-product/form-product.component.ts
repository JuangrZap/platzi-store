import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidators } from './../../../utils/validators';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
    selector: 'app-form-product',
    templateUrl: './form-product.component.html',
    styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private productsService: ProductsService,
        private router: Router
    ) {
        this.buildForm();
    }

    ngOnInit() {}

    saveProduct(event: Event): void {
        event.preventDefault();
        if (this.form.valid) {
            const product = this.form.value;
            this.productsService
                .createProduct(product)
                .subscribe((newProduct) => {
                    console.log(newProduct);
                    this.router.navigate(['./admin/products']);
                });
        }
        console.log(this.form.value);
    }

    private buildForm(): void {
        this.form = this.formBuilder.group({
            id: ['', [Validators.required]],
            title: ['', [Validators.required]],
            price: [0, [Validators.required, MyValidators.isPriceValid]],
            image: [''],
            description: ['', [Validators.required]],
        });
    }

    get priceField(): AbstractControl {
        return this.form.get('price');
    }
}
