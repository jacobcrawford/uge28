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
  selectedTab: 'results' | 'about' = 'results';
  game = '';
  winner = '';
  entries: GameEntry[] = [];

  setTab(tab: 'results' | 'about'): void {
    this.selectedTab = tab;
  }

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
