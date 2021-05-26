import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';

// Components
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
                canActivate: [AdminGuard],
            },
            {
                path: 'products',
                loadChildren: () =>
                    import('./product/product.module').then(
                        (m) => m.ProductModule
                    ),
                canActivate: [AdminGuard],
            },
            {
                path: 'contact',
                loadChildren: () =>
                    import('./contact/contact.module').then(
                        (m) => m.ContactModule
                    ),
                canActivate: [AdminGuard],
            },
            {
                path: 'demo',
                loadChildren: () =>
                    import('./demo/demo.module').then((m) => m.DemoModule),
            },
        ],
    },
    {
        path: '**',
        loadChildren: () =>
            import('./not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
