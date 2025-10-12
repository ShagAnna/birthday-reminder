import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Clipboard } from '@angular/cdk/clipboard';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wish-list',
  imports: [FormsModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  wishes: string[] = [
    'Wishing you a day filled with love and laughter 🎂',
    'Happy Birthday! May your year be full of happiness 🎉',
    'Cheers to more adventures and memories 🥳',
    'May all your dreams come true 🌟',
  ];

  newWish = '';
  copyMessage = '';

  constructor(
    private clipboard: Clipboard,
    private location: Location,
    private snackBar: MatSnackBar
  ) {}

  addWish(): void {
    if (this.newWish.trim()) {
      this.wishes.push(this.newWish.trim());
      this.newWish = '';
    }
  }

  copyWish(wish: string): void {
    this.clipboard.copy(wish);
    this.snackBar.open('Wish copied to clipboard!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  goBack() {
    this.location.back();
  }
}
