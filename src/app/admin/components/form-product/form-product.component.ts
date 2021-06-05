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
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-form-product',
    templateUrl: './form-product.component.html',
    styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
    form: FormGroup;
    image$: Observable<any>;

    constructor(
        private formBuilder: FormBuilder,
        private productsService: ProductsService,
        private angularFireStorage: AngularFireStorage,
        private router: Router
    ) {
        this.buildForm();
    }

    ngOnInit(): void {}

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

    uploadFile(event: any): void {
        const file = event.target.files[0];
        const name = 'image.png';
        const fileRef = this.angularFireStorage.ref(name);
        const task = this.angularFireStorage.upload(name, file);

        task.snapshotChanges()
            .pipe(
                finalize(() => {
                    this.image$ = fileRef.getDownloadURL();
                    this.image$.subscribe((url) => {
                        console.log(url);
                        this.form.get('image').setValue(url);
                    });
                })
            )
            .subscribe();
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
