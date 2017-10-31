import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";


@Injectable()
export class CommonTranslateService{
    constructor(public translate:TranslateService){
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
        // translate.use('en');
    }

    instant(key: string | Array<string>, interpolateParams?: Object): string | any{
        return this.translate.instant(key,interpolateParams);
    }
}