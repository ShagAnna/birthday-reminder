import { Routes } from '@angular/router';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';

export const routes: Routes = [
  { path: '', component: CreateReminderComponent },
  { path: 'reminders', component: ReminderListComponent },
];
