import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Login/login-guard';
import { LoginComponent } from './login/login/login.component';
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
        loadChildren: 'app/estados/estados.module#EstadosModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'cidades',
        loadChildren: 'app/cidades/cidades.module#CidadesModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'enderecoClientes',
        loadChildren: 'app/enderecoClientes/enderecoClientes.module#EnderecoClientesModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'categorias',
        loadChildren: 'app/categorias/categorias.module#CategoriasModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'produtos',
        loadChildren: 'app/produtos/produtos.module#ProdutosModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'pedidos',
        loadChildren: 'app/pedidos/pedidos.module#PedidosModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'relatorioPedidos',
        loadChildren: 'app/relatorioPedidos/relatorioPedidos.module#RelatorioPedidosModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        component: LoginComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);