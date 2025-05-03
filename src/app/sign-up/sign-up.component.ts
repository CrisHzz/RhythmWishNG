import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomCursorComponent } from '../components/custom-cursor/custom-cursor.component';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: '¡Campos incompletos!',
        text: 'Por favor complete todos los campos obligatorios',
        icon: 'error',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
      return;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire({
        title: 'Las contraseñas no coinciden',
        text: 'Por favor verifica que ambas contraseñas sean idénticas',
        icon: 'warning',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
      return;
    }

    if (!this.selectedRole) {
      Swal.fire({
        title: 'Rol no seleccionado',
        text: 'Por favor seleccione un rol para continuar',
        icon: 'info',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
      return;
    }

    const success = this.authService.register(this.email, this.password, this.confirmPassword, this.selectedRole);
    
    if (success) {
      Swal.fire({
        title: '¡Registro exitoso!',
        text: 'Te has registrado correctamente',
        icon: 'success',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      }).then(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      Swal.fire({
        title: 'Error durante el registro',
        text: 'Ha ocurrido un problema. Intente nuevamente.',
        icon: 'error',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
    }
  }
}
