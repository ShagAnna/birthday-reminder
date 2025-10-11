import { Component } from '@angular/core';
import { Reminder } from '../app.types';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reminder-list',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.scss',
  standalone: true,
})
export class ReminderListComponent {
  reminders: Reminder[] = [];

  constructor(private router: Router) {
    const stored = localStorage.getItem('reminders');
    if (stored) {
      const parsed: Reminder[] = JSON.parse(stored);
      this.reminders = this.sortByBirthday(parsed);
    }
  }

  sortByBirthday(reminders: Reminder[]): Reminder[] {
    return reminders.sort((a, b) => {
      const dateA = new Date(a.birthday).getTime();
      const dateB = new Date(b.birthday).getTime();
      return dateA - dateB;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
