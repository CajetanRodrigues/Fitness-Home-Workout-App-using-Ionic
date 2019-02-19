import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbsWorkoutPage } from './abs-workout.page';

const routes: Routes = [
  {
    path: '',
    component: AbsWorkoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbsWorkoutPage]
})
export class AbsWorkoutPageModule {}
