import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderComponent } from './border/border.component'
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';
import { OutlineComponent } from './outline/outline.component';
import { TextShadowComponent } from './text-shadow/text-shadow.component';
import { TransformComponent } from './transform/transform.component';
import { TransitionComponent } from './transition/transition.component';


const routes: Routes = [
  { path: '', redirectTo: '/border', pathMatch: 'full'},
  { path: 'border', component: BorderComponent },
  { path: 'border-radius', component: BorderRadiusComponent },
  { path: 'box-shadow', component: BoxShadowComponent},
  { path: 'outline', component: OutlineComponent},
  { path: 'text-shadow', component: TextShadowComponent},
  { path: 'transform', component: TransformComponent},
  { path: 'transition', component: TransitionComponent}  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
