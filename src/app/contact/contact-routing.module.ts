import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    // Otros modulos lo puedan usar
    exports: [RouterModule],
})
export class ContactRoutingModule {}
