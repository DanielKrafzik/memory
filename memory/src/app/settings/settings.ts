import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-settings',
  imports: [RouterLink],
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

  isStartDisabled = true;

  checkStartButton() {
    this.isStartDisabled =
      !this.choosenPlayer ||
      !this.gameTheme ||
      !this.boardSize;
  }

  setGameTheme(theme: string): void {
    this.gameTheme = theme;
    this.previewUrl = `/img/settings/${theme}.png`;
    this.themeInfo = `${theme.replace(/_/g, ' ').charAt(0).toUpperCase() + theme.replace(/_/g, ' ').slice(1)}`;
    this.checkStartButton();
  }

  setChoosenPlayer(player: string): void {
    this.choosenPlayer = player;
    this.playerInfo = player;
    this.checkStartButton();
  }

  setBoardSize(size: number): void {
    this.boardSize = size;
    this.boardInfo = `${size} cards`;
    this.checkStartButton();
  }
}
