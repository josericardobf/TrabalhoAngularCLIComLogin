import { Routes, RouterModule } from "@angular/router";
import { EstadoListComponent } from "./estado-list/estado-list.component";
import { EstadoFormComponent } from "./estado-form/estado-form.component";
import { EstadoCrudComponent } from "./estado-crud/estado-crud.component";

const ESTADOS_ROUTES: Routes = [
    {
        path: '',
        component: EstadoCrudComponent
    },
    {
        path: ':id',
        component: EstadoCrudComponent
    }

];
export const estadosRouting = RouterModule.forChild(ESTADOS_ROUTES);