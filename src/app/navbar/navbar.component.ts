import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  currentTheme: string;

  constructor(private translate: TranslateService , private themeService: ThemeService) {
    translate.setDefaultLang('en'); // Set the default language
    this.currentTheme = this.themeService.getTheme(); //DARK  LIGHT Theme
  }


// FR AR EN
  switchLanguage(event: any) {
    const language = event.target.value;
    this.translate.use(language);
  }


 // DARK  LIGHT Theme


  toggleTheme() {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getTheme();
  }




}
