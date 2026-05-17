import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameTheme: string = 'code_theme';
  choosenPlayer: string | null = null;
  boardSize: number | null = null;
}
