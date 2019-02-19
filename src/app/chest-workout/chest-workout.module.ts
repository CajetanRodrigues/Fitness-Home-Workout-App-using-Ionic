import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChestWorkoutPage } from './chest-workout.page';

const routes: Routes = [
  {
    path: '',
    component: ChestWorkoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChestWorkoutPage]
})
export class ChestWorkoutPageModule {}
