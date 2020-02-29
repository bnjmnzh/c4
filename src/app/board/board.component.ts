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
    if (!this.chips[idx]) {
      this.chips.splice(idx, 1, this.player);
      this.redIsNext = !this.redIsNext;
    }

    this.winner = this.calculateWinner();
  }



}
