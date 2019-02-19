import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-abs-workout',
  templateUrl: './abs-workout.page.html',
  styleUrls: ['./abs-workout.page.scss'],
})
export class AbsWorkoutPage implements OnInit {

  constructor(private  navctrl : NavController) { }

  ngOnInit() {
  }
    navigateBack(){
    this.navctrl.navigateBack('');
    }
}
