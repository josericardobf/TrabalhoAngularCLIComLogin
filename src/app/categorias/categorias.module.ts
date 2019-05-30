import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { categoriasRouting } from './categorias.routing';
import { CategoriasService } from './categorias.service';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { FormsModule } from '@angular/forms';
import { CategoriaCrudComponent } from './categoria-crud/categoria-crud.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule, categoriasRouting, FormsModule
  ],
  declarations: [CategoriaListComponent, CategoriaFormComponent, CategoriaCrudComponent,
    FilterPipe,
    CategoriaFormComponent,
    CategoriaCrudComponent],
  providers: [CategoriasService]
})
export class categoriasModule { }
