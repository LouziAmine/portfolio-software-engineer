import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 // constructor() { }

  setTheme(theme: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.className = theme;
    }
  }

  getTheme() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') || 'light-mode';
    }
    return 'light-mode';
  }

  toggleTheme() {
    if (typeof localStorage !== 'undefined') {
      const currentTheme = this.getTheme();
      const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
      this.setTheme(newTheme);
      console.log(newTheme);
    }
  }
}
