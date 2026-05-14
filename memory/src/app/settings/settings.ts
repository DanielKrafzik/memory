import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  gameTheme: string = 'code_theme';
  choosenPlayer: string | null = null;
  boardSize: number | null = null;
  previewUrl: string = '/img/settings/code_theme.png';

  themeInfo: string = 'Code theme';
  playerInfo: string = 'Player';
  boardInfo: string = 'Board size';

  setGameTheme(theme: string): void {
    this.gameTheme = theme;
    this.previewUrl = `/img/settings/${theme}.png`;
    this.themeInfo = `${theme.replace(/_/g, ' ').charAt(0).toUpperCase() + theme.replace(/_/g, ' ').slice(1)}`;
  }

  setChoosenPlayer(player: string): void {
    this.choosenPlayer = player;
    this.playerInfo = player;
    
  }

  setBoardSize(size: number): void {
    this.boardSize = size;
    this.boardInfo = `${size} cards`;
  }
}
