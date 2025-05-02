import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandingComponent } from '../../branding/branding.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, BrandingComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  experiences = [
    {
      name: 'Santiago Valencia',
      rating: 5,
      testimonial: 'Como productor musical y artista en progeso es una herramienta que me sirve demasiado a la hora de entender el comportamiento de las melodias y abrir mi creatividad',
      date: '1 de abril del 2025'
    },
    {
      name: 'Juan David Carillo',
      rating: 4.5,
      testimonial: 'Soy fan del vallenato y como fan de este me gusta crear canciones que con Rhythm Wish puedo crear a libertad, la letra la pondre yo mientras tomo una cerveza',
      date: '31 de febrero del 2025'
    },
    {
      name: 'Sara Medina',
      rating: 4,
      testimonial: 'Me gusto mucho la libertad que me da y sobre todo lo especifica que puedo ser a la hora de dar ideas',
      date: '3 de abril del 2025'
    }
  ];
}