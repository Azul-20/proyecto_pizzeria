import { Routes } from '@angular/router';
import { ClientComponent } from './views/client/client.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { AdminComponent } from './views/admin/admin.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: ClientComponent, children: [
        {path: 'home', component: InicioComponent},
        {path: 'delivery', component: PedidoComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]},

    {path: 'admin', component: AdminComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'clientes', component: ClientesComponent},
        {path: 'pizzas', component: PizzasComponent},
        {path: 'pedidos', component: PedidosComponent},
        {path: 'detalle-pedido', component: DetallePedidoComponent},
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]},

    {path: '**', redirectTo: '', pathMatch: 'full'}
];
