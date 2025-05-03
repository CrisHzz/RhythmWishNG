import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomCursorComponent } from '../components/custom-cursor/custom-cursor.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CustomCursorComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  selectedRole: string = '';
  errorMessage: string = '';
  
  roles = [
    { value: 'producer', label: 'Productor musical' },
    { value: 'artist', label: 'Artista' },
    { value: 'fan', label: 'Entusiasta' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirigir si ya está autenticado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor complete todos los campos';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    if (!this.selectedRole) {
      this.errorMessage = 'Por favor seleccione un rol';
      return;
    }

    const success = this.authService.register(this.email, this.password, this.confirmPassword, this.selectedRole);
    
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Error durante el registro. Intente nuevamente.';
    }
  }
}
