import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    // Otros modulos lo puedan usar
    exports: [RouterModule],
})
export class HomeRoutingModule {}
