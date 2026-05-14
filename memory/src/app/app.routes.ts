import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Settings } from './settings/settings';
import { Gamescreen } from './gamescreen/gamescreen';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'settings', component: Settings },
  { path: 'gamescreen', component: Gamescreen }
];
