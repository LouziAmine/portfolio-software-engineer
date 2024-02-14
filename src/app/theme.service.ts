import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly localStorageAvailable: boolean;

  constructor() {
    this.localStorageAvailable = typeof window !== 'undefined' && window.localStorage !== null;

    this.init();
  }

  private init() {
    if (this.localStorageAvailable) {
    const currentTheme = this.getTheme();
    this.setTheme(currentTheme);
    }
  }
  setTheme(theme: string) {
    if (this.localStorageAvailable) {
      localStorage.setItem('theme', theme);
      document.documentElement.className = theme;
    }
  }

  getTheme() {
    if (this.localStorageAvailable) {
      return localStorage.getItem('theme') || 'light-mode';
    }
    return 'light-mode'; // Default to light mode if localStorage is not available
  }

  toggleTheme() {
     if (this.localStorageAvailable) {
      const currentTheme = this.getTheme();
      const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
      this.setTheme(newTheme);
     }
  }


}
