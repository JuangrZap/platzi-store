import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MyValidators } from 'src/app/utils/validators';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
    form: FormGroup;
    id: string;

    constructor(
        private formBuilder: FormBuilder,
        private productsService: ProductsService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.buildForm();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params.id;
            this.productsService.getProduct(this.id).subscribe((product) => {
                this.form.patchValue(product);
            });
        });
    }

    saveProduct(event: Event): void {
        event.preventDefault();
        if (this.form.valid) {
            const product = this.form.value;
            this.productsService
                .updateProduct(this.id, product)
                .subscribe((newProduct) => {
                    console.log(newProduct);
                    this.router.navigate(['./admin/products']);
                });
        }
        console.log(this.form.value);
    }

    private buildForm(): void {
        this.form = this.formBuilder.group({
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
