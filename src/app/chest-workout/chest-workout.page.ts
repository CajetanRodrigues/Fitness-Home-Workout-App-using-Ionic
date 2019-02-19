import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-chest-workout',
  templateUrl: './chest-workout.page.html',
  styleUrls: ['./chest-workout.page.scss'],
})
export class ChestWorkoutPage implements OnInit {

  constructor(private  navctrl : NavController) { }

  ngOnInit() {
  }
    navigateBack(){
        this.navctrl.navigateBack('');
    }
}
