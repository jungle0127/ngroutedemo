import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HeroesComponent} from './heroes/heroes.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heros', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
