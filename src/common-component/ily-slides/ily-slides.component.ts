import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController } from 'ionic-angular';


@Component({
    selector: 'ily-slides',
    templateUrl: 'ily-slides.component.html'
})
export class IlySildesComponent {
    @Input("slidesItems")
    slidesItems:any;
    constructor(public navCtrl: NavController, ) {

    }


}
