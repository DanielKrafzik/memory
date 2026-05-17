import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game';
import { CommonModule } from '@angular/common';

interface MemoryCard {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

type GameTheme = 'code_theme' | 'game_theme';

@Component({
  selector: 'app-gamescreen',
  imports: [CommonModule],
  templateUrl: './gamescreen.html',
  styleUrl: './gamescreen.scss',
})
export class Gamescreen implements OnInit {

  constructor(private gameService: GameService) {}

  cards: MemoryCard[] = [];

  gameCards: Record<GameTheme, string[]> = {
    code_theme: [
      'code_1.png','code_2.png','code_3.png','code_4.png',
      'code_5.png','code_6.png','code_7.png','code_8.png',
      'code_9.png','code_10.png','code_11.png','code_12.png',
      'code_13.png','code_14.png','code_15.png','code_16.png',
      'code_17.png','code_18.png'
    ],
    game_theme: [
      'game_1.png','game_2.png','game_3.png','game_4.png',
      'game_5.png','game_6.png','game_7.png','game_8.png',
      'game_9.png','game_10.png','game_11.png','game_12.png',
      'game_13.png','game_14.png','game_15.png','game_16.png',
      'game_17.png','game_18.png'
    ]
  };

  ngOnInit(): void {
    this.createBoard();
  }

  createBoard(): void {

    const theme = this.gameService.gameTheme as GameTheme;

    const boardSize = this.gameService.boardSize ?? 16;

    const pairCount = boardSize / 2;

    const selectedImages = this.gameCards[theme].slice(0, pairCount);

    const duplicated = [...selectedImages, ...selectedImages];

    this.cards = duplicated
      .map((image, index) => ({
        id: index,
        image,
        flipped: false,
        matched: false
      }))
      .sort(() => Math.random() - 0.5);
  }
}