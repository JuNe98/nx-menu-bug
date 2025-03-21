import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'lib-my-lib',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './my-lib.component.html',
  styleUrl: './my-lib.component.css',
})
export class MyLibComponent {}
