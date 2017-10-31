import { NgModule } from "@angular/core";
import { UIService } from "./ui.service";
import { CommonTranslateService } from "./translate.service";
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
@NgModule({
    providers:[
        UIService,CommonTranslateService
    ]
})
export class CommonUtilsModule{}