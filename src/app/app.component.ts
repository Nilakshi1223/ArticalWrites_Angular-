import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticalPageComponent } from './artical-page/artical-page.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ArticalPageComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArticalWrites';
}
