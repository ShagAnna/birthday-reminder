import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { CreateReminderComponent } from './app/create-reminder/create-reminder.component';
import { ReminderListComponent } from './app/reminder-list/reminder-list.component';
import { WishListComponent } from './app/wish-list/wish-list.component';

const routes = [
  { path: '', component: CreateReminderComponent },
  { path: 'reminders', component: ReminderListComponent },
  { path: 'wishes', component: WishListComponent },
  { path: '**', redirectTo: '' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
