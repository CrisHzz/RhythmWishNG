import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserData | null>;
  public currentUser: Observable<UserData | null>;

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserData | null>(this.getUserData());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserData | null {
    return this.currentUserSubject.value;
  }

  // Registrar un nuevo usuario
  register(email: string, password: string, confirmPassword: string, role: string): boolean {
    if (password !== confirmPassword) {
      return false;
    }

    try {
      const userData: UserData = {
        email,
        role,
        name: email.split('@')[0],
        id: this.generateUserId(),
      };

      // Genera un token JWT (simulado)
      const token = this.generateMockJWT(userData);

      // Guarda el token y los datos del usuario
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      this.currentUserSubject.next(userData);
      return true;
    } catch (error) {
      console.error('Error durante el registro:', error);
      return false;
    }
  }

  // Iniciar sesión de usuario
  login(email: string, password: string): boolean {
    try {
      // En un entorno real, aquí verificarías las credenciales con el backend
      const userData: UserData = {
        email,
        role: 'artist', // Rol por defecto en esta simulación
        name: email.split('@')[0],
        id: this.generateUserId(),
      };

      const token = this.generateMockJWT(userData);

      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      this.currentUserSubject.next(userData);
      return true;
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      return false;
    }
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    this.currentUserSubject.next(null);
    this.router.navigate(['/sign-in']);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  // Obtener datos del usuario
  getUserData(): UserData | null {
    const userDataStr = localStorage.getItem('userData');
    if (!userDataStr) return null;
    
    try {
      return JSON.parse(userDataStr);
    } catch (e) {
      return null;
    }
  }

  // Generar un ID de usuario aleatorio
  private generateUserId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  // Generar un token JWT simulado
  private generateMockJWT(userData: UserData): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      ...userData,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 horas
    }));
    const signature = btoa('mockSignature');

    return `${header}.${payload}.${signature}`;
  }
}