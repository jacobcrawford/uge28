import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface GameEntry {
  game: string;
  winner: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Game Results Tracker';
  selectedTab: 'results' | 'about' = 'about';
  game = '';
  winner = '';
  winners: string[] = [];
  entries: GameEntry[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadWinners();
  }

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

  private loadWinners(): void {
    this.http.get<string[]>('assets/winners.json').subscribe({
      next: (winners) => {
        this.winners = winners
          .filter((winner) => typeof winner === 'string')
          .map((winner) => winner.trim())
          .filter((winner) => winner.length > 0);
      },
      error: () => {
        this.winners = [];
      }
    });
  }
}
