import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
    images: string[] = [
        'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/banner-1.jpg',
        'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/banner-2.jpg',
        'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/banner-3.jpg',
    ];

    constructor() {}

    ngOnInit(): void {}
}
