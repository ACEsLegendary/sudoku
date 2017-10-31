import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";


@Injectable()
export class CommonTranslateService{
    constructor(private translate:TranslateService){
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
    }
}