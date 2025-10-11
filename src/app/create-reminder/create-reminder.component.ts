import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reminder',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './create-reminder.component.html',
  styleUrl: './create-reminder.component.scss',
  standalone: true,
})
export class CreateReminderComponent {
  name: string = '';
  birthday: Date | null = null;
  photoUrl: string | ArrayBuffer | null = null;
  notificationDate: Date | null = null;
  notificationTime: string = '';

  constructor(private router: Router) {}

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => (this.photoUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  saveReminder() {
    const reminder = {
      name: this.name,
      birthday: this.birthday ? this.birthday.toISOString() : '',
      photoUrl: this.photoUrl,
      notificationDate: this.notificationDate
        ? this.notificationDate.toISOString()
        : null,
      notificationTime: this.notificationTime,
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
