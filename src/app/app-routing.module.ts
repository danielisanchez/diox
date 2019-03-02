import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'detalles', component: DetailsComponent},
{path: 'info', component: InfoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
