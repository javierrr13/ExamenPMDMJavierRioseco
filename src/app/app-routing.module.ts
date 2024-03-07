import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'saludo',component:SaludoComponent},
  {path:'cronometro', component:CronometroComponent },
  {path: 'meunu', component:MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
