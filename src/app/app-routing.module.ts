import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'agend-consulta',
    loadChildren: () => import('./pages/agend-consulta/agend-consulta.module').then( m => m.AgendConsultaPageModule)
  },
  {
    path: 'form-cadastro',
    loadChildren: () => import('./pages/form-cadastro/form-cadastro.module').then( m => m.FormCadastroPageModule)
  },
  {
    path: 'update-pessoa',
    loadChildren: () => import('./pages/update-pessoa/update-pessoa.module').then( m => m.UpdatePessoaPageModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./pages/lista-pessoa/lista-pessoa.module').then( m => m.ListaPessoaPageModule)
  },
  {
    path: 'cad-doutor',
    loadChildren: () => import('./pages/cad-doutor/cad-doutor.module').then( m => m.CadDoutorPageModule)
  },
  {
    path: 'lista-doutor',
    loadChildren: () => import('./pages/lista-doutor/lista-doutor.module').then( m => m.ListaDoutorPageModule)
  },
  {
    path: 'lista-consulta',
    loadChildren: () => import('./pages/lista-consulta/lista-consulta.module').then( m => m.ListaConsultaPageModule)
  },
  {
    path: 'update-consulta',
    loadChildren: () => import('./pages/update-consulta/update-consulta.module').then( m => m.UpdateConsultaPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
