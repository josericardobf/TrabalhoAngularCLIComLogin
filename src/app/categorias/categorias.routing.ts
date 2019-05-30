import { Routes, RouterModule } from "@angular/router";
import { CategoriaListComponent } from "./categoria-list/categoria-list.component";
import { CategoriaFormComponent } from "./categoria-form/categoria-form.component";
import { CategoriaCrudComponent } from "./categoria-crud/categoria-crud.component";

const CATEGORIAS_ROUTES: Routes = [
    {
        path: '',
        component: CategoriaCrudComponent
    },
    {
        path: ':id',
        component: CategoriaCrudComponent
    }

];
export const categoriasRouting = RouterModule.forChild(CATEGORIAS_ROUTES);