import { Component } from '@angular/core';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'birthday-reminder';
}
