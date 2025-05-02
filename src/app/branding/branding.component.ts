import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCursorComponent } from '../components/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CommonModule, CustomCursorComponent],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {
  // Este componente proporciona estilos de marca y el cursor personalizado
}
