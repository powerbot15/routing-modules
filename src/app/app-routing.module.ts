import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthLandingComponent } from './modules/landing/components/unauth-landing/unauth-landing.component';
import { DashboardMainComponent } from './modules/dashboard/components/dashboard-main/dashboard-main.component';

import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard} from './guards/un-auth.guard';

const routes: Routes = [
  { path: '', component: UnauthLandingComponent, canActivate: [UnAuthGuard]},
  { path: 'dashboard', component: DashboardMainComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] }
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
