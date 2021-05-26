import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    // Otros modulos lo puedan usar
    exports: [RouterModule],
})
export class DemoRoutingModule {}
