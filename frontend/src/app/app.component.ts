import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GameEntry {
  game: string;
  winner: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Results Tracker';
  game = '';
  winner = '';
  entries: GameEntry[] = [];

  addEntry(): void {
    const game = this.game.trim();
    const winner = this.winner.trim();

    if (!game || !winner) {
      return;
    }

    this.entries = [{ game, winner }, ...this.entries];
    this.game = '';
    this.winner = '';
  }
}
