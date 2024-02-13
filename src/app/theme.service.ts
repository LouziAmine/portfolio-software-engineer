import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 // constructor() { }

  // setTheme(theme: string) {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('theme', theme);
  //     document.documentElement.className = theme;
  //   }
  // }
  //
  // getTheme() {
  //   if (typeof localStorage !== 'undefined') {
  //     return localStorage.getItem('theme') || 'light-mode';
  //   }
  //   return 'light-mode';
  // }
  //
  // toggleTheme() {
  //   if (typeof localStorage !== 'undefined') {
  //     const currentTheme = this.getTheme();
  //     const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
  //     this.setTheme(newTheme);
  //     console.log(newTheme);
  //   }
  // }

  private readonly localStorageAvailable: boolean;

  constructor() {
    this.localStorageAvailable = typeof window !== 'undefined' && window.localStorage != null;
    // Initialize theme mode if localStorage is available
    if (this.localStorageAvailable && !localStorage.getItem('theme')) {
      // Set default theme mode to light-mode if not set yet
      localStorage.setItem('theme', 'light-mode');
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
