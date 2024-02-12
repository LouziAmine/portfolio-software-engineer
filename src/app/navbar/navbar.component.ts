import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set the default language
  }



  switchLanguage(event: any) {
    const language = event.target.value;
    this.translate.use(language);
  }

}
