import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoListComponent } from './estado-list/estado-list.component';
import { estadosRouting } from './estados.routing';
import { EstadosService } from './estados.service';
import { EstadoFormComponent } from './estado-form/estado-form.component';
import { FormsModule } from '@angular/forms';
import { EstadoCrudComponent } from './estado-crud/estado-crud.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule, estadosRouting, FormsModule
  ],
  declarations: [EstadoListComponent, EstadoFormComponent, EstadoCrudComponent,
    FilterPipe,
    EstadoFormComponent,
    EstadoCrudComponent,
    EstadoFormComponent,
    EstadoCrudComponent],
  providers: [EstadosService]
})
export class estadosModule { }
