import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  
  constructor(private router: Router) { }

  logout(event: Event): void {
    event.preventDefault();
    // Aquí implementar la lógica de cierre de sesión
    // Por ejemplo, eliminar tokens de autenticación del localStorage
    localStorage.removeItem('authToken');
    // Redirigir al login
    this.router.navigate(['/sign-in']);
  }
}
