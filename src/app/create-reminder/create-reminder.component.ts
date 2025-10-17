import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-reminder',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './create-reminder.component.html',
  styleUrl: './create-reminder.component.scss',
  standalone: true,
})
export class CreateReminderComponent {
  name = '';
  photoUrl: string | ArrayBuffer | null = null;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  selectedMonth: number | null = null;
  selectedDay: number | null = null;

  constructor(private router: Router) {}

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.photoUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  get daysInMonth(): number[] {
    if (this.selectedMonth === null) return [];
    const year = new Date().getFullYear();
    const days = new Date(year, this.selectedMonth + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

  saveReminder() {
    if (
      this.selectedMonth === null ||
      this.selectedDay === null ||
      !this.name
    ) {
      return;
    }

    const currentYear = new Date().getFullYear();
    const birthday = new Date(
      currentYear,
      this.selectedMonth,
      this.selectedDay
    );

    const reminder = {
      name: this.name.trim(),
      month: this.months[this.selectedMonth],
      day: this.selectedDay,
      birthday: birthday.toISOString(),
      photoUrl: this.photoUrl,
    };

    const stored = localStorage.getItem('reminders');
    const reminders = stored ? JSON.parse(stored) : [];
    reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));
    this.router.navigate(['/reminders']);
  }

  goToList() {
    this.router.navigate(['/reminders']);
  }
}
