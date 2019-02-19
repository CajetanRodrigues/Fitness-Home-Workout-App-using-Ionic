import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'ChestWorkout', loadChildren: './chest-workout/chest-workout.module#ChestWorkoutPageModule' },
  { path: 'AbsWorkout', loadChildren: './abs-workout/abs-workout.module#AbsWorkoutPageModule' },
  { path: 'LegsWorkout', loadChildren: './legs-workout/legs-workout.module#LegsWorkoutPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
