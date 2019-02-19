import { Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import { Vibration } from '@ionic-native/vibration/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  constructor(private navctrl : NavController,
              private vibration: Vibration){
      // const bannerConfig: AdMobFreeBannerConfig = {
      //     // add your config here
      //     // for the sake of this example we will just use the test config
      //     adId : 'ca-app-pub-4955259342857966/6965222271',
      //
      //     isTesting: false,
      //     autoShow: true
      // };
      // this.admobFree.banner.config(bannerConfig);
      //
      // this.admobFree.banner.prepare()
      //     .then(() => {
      //         // banner Ad is ready
      //         // if we set autoShow to false, then we will need to call the show method here
      //     })
      //     .catch(e => console.log(e));
  }
  showChestWorkout(){
      this.vibration.vibrate(30);
    this.navctrl.navigateForward('/ChestWorkout');
  }
  showAbsWorkout(){
      this.vibration.vibrate(30);

      this.navctrl.navigateForward('/AbsWorkout');

  }
  showLegsWorkout(){
      this.vibration.vibrate(30);

      this.navctrl.navigateForward('/LegsWorkout');

  }
  vibrate(){
      this.vibration.vibrate(30);

  }

}
