import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomCursorComponent } from '../components/custom-cursor/custom-cursor.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CustomCursorComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

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
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor complete todos los campos';
      return;
    }

    const success = this.authService.login(this.email, this.password);
    
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Error durante el inicio de sesión. Intente nuevamente.';
    }
  }
}
