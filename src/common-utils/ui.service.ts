import { Injectable } from "@angular/core";
import { AlertController, AlertOptions } from "ionic-angular";

@Injectable()
export class UIService{
    constructor(private alertCtrl:AlertController){}
    presentAlert(params:AlertOptions){
        var defaultOptions:AlertOptions={
            title:"温馨提示",
            enableBackdropDismiss:true
        };
        var options=Object.assign({},defaultOptions,params);
        this.alertCtrl.create(options).present();
    }
}