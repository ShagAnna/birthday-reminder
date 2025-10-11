import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { CreateReminderComponent } from './app/create-reminder/create-reminder.component';
import { ReminderListComponent } from './app/reminder-list/reminder-list.component';

const routes = [
  { path: '', component: CreateReminderComponent },
  { path: 'reminders', component: ReminderListComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
