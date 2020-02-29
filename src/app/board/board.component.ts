import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  chips: any[];
  redIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.chips = Array(42).fill(null);
    this.winner = null;
    this.redIsNext = true;
  }

  get player() {
    return this.redIsNext ? "red" : "yellow";
  }

  makeMove(idx: number) {
    for (var i = 35 + (idx % 7); i >= 0 && this.chips[i] != null; i = i - 7) {
      continue;
    }
    console.log(i);

    if (i < 0) {
      return;
    } else {
      this.chips.splice(i, 1, this.player);
      this.winner = this.calculateWinner(this.player);
      this.redIsNext = !this.redIsNext;
    }
  }

  // theta(n) ;^)
  calculateWinner(player: string) {
    // Check horizontal
    for (let i = 0; i < 42; i = i + 7) {
      let count = 0;
      for (let j = 0; j < 7; j++) {
        if (this.chips[i + j] == player) {
          count++;
          if (count >= 4) {
            return player;
          }
        } else {
          count = 0;
        }
      }
    }

    // Check vertical
    for (let i = 0; i < 7; i++) {
      let count = 0;
      for (let j = 0; j < 42; j = j + 7) {
        if (this.chips[i + j] == player) {
          count++;
          if (count >= 4) {
            return player;
          }
        } else {
          count = 0;
        }
      }
    }

    // Check diagonal
    const lines = [
      [3, 11, 19, 27],
      [2, 10, 18, 26, 34],
      [1, 9, 17, 25, 33, 41],
      [0, 8, 16, 24, 32, 40],
      [7, 15, 23, 31, 39],
      [14, 22, 30, 38],
      [3, 9, 15, 21],
      [4, 10, 16, 22, 28],
      [5, 11, 17, 23, 29, 35],
      [6, 12, 18, 24, 30, 36],
      [13, 19, 25, 31, 37],
      [20, 26, 32, 38]
    ]

    for (let i = 0; i < lines.length; i++) {
      let count = 0;
      for (let j = 0; j < lines[i].length; j++) {
        if (this.chips[lines[i][j]] == player) {
          count++;
          if(count >= 4) {
            return player;
          } 
        } else {
          count = 0;
        }
      }
    }
    
    return null;
  }


}
