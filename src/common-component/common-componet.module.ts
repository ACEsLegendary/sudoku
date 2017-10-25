import { NgModule } from "@angular/core";
import { IlySildesComponent } from "./ily-slides/ily-slides.component";
import { IonicModule } from "ionic-angular";

@NgModule({
    declarations: [
        IlySildesComponent
    ],
    imports: [
        IonicModule
    ],
    entryComponents: [
        IlySildesComponent
    ],
    exports:[
        IlySildesComponent
    ],
    providers: [

    ]
})
export class CommoncomponentModule { }
