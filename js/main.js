import { navigation } from './navigation.js';
import { overlay } from './overlay.js';
import { darkMode } from './darkMode.js';
import { menu } from './menu.js';
import { landing } from './landing.js';

document.addEventListener('DOMContentLoaded', () => {
    interceptNavigation();
    manageOverlay();
    manageColourMode();
    manageMenu();
});