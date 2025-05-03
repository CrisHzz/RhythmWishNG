import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, UserData } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent implements OnInit {
  userData: UserData | null = null;
  
  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit(): void {
    // Suscribirse a los cambios en el usuario actual
    this.authService.currentUser.subscribe(user => {
      this.userData = user;
    });
  }

  logout(event: Event): void {
    event.preventDefault();
    // Usar el servicio de autenticación para cerrar sesión
    this.authService.logout();
    // No necesitamos redirigir aquí ya que el servicio se encarga de eso
  }
}
