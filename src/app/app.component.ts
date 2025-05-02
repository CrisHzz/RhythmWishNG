import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandingComponent } from './branding/branding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RhythmW';
}
