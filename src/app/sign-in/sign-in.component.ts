import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomCursorComponent } from '../components/custom-cursor/custom-cursor.component';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

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
  returnUrl: string = '/dashboard';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Capturar la URL de retorno si existe
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    
    // Redirigir si ya está autenticado
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit() {
    if (!this.email || !this.password) {
      Swal.fire({
        title: '¡Campos incompletos!',
        text: 'Por favor complete todos los campos',
        icon: 'error',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
      return;
    }

    const success = this.authService.login(this.email, this.password);
    
    if (success) {
      // Redirigir al usuario a la página que intentaba acceder originalmente
      this.router.navigateByUrl(this.returnUrl);
    } else {
      Swal.fire({
        title: 'Error de inicio de sesión',
        text: 'Credenciales incorrectas o problema de conexión',
        icon: 'error',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
    }
  }
}
