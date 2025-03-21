import { Component } from '@angular/core';
import { MyLibComponent } from '@my-org/my-lib';


@Component({
  imports: [MyLibComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
