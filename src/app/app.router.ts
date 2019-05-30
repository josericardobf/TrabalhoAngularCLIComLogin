import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'estados',
        loadChildren: 'app/estados/estados.module#EstadosModule'
    },
    { 
        path: 'cidades',
        loadChildren: 'app/cidades/cidades.module#CidadesModule'
    },
    { 
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule'
    },
    { 
        path: 'enderecoClientes',
        loadChildren: 'app/enderecoClientes/enderecoClientes.module#EnderecoClientesModule'
    },
    { 
        path: 'categorias',
        loadChildren: 'app/categorias/categorias.module#CategoriasModule'
    },
    { 
        path: 'produtos',
        loadChildren: 'app/produtos/produtos.module#ProdutosModule'
    },
    { 
        path: 'pedidos',
        loadChildren: 'app/pedidos/pedidos.module#PedidosModule'
    },
    { 
        path: 'relatorioPedidos',
        loadChildren: 'app/relatorioPedidos/relatorioPedidos.module#RelatorioPedidosModule'
    }
];
export const RoutingModule = RouterModule.forRoot(routes);