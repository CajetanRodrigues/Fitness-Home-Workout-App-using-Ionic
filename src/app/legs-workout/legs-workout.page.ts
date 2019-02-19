import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-legs-workout',
  templateUrl: './legs-workout.page.html',
  styleUrls: ['./legs-workout.page.scss'],
})
export class LegsWorkoutPage implements OnInit {

  constructor(private  navctrl : NavController) { }

  ngOnInit() {
  }
    navigateBack(){
        this.navctrl.navigateBack('');
    }
}
