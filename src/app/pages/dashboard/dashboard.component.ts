import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface Playlist {
  id: number;
  title: string;
  artist: string;
  songCount: number;
  coverImg: string;
  plays: string;
  likes: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent]
})
export class DashboardComponent implements OnInit {
  creationPrompt: string = '';
  searchQuery: string = '';
  playlists: Playlist[] = [];
  allPlaylists: Playlist[] = [];

  constructor() { }

  ngOnInit(): void {
    // Mock data - En una aplicación real, esto vendría de un servicio
    this.allPlaylists = [
      {
        id: 1,
        title: 'Running',
        artist: 'Cafune',
        songCount: 9,
        coverImg: '/dashboard/songs/running.jpg',
        plays: '7.9k',
        likes: '139'
      },
      {
        id: 2,
        title: "That's The Spirit",
        artist: 'Bring Me the Horizon',
        songCount: 11,
        coverImg: '/dashboard/songs/spirit.jpg',
        plays: '11.2k',
        likes: '371'
      },
      {
        id: 3,
        title: 'Death of a Bachelor',
        artist: 'Panic at the disco!',
        songCount: 11,
        coverImg: '/dashboard/songs/bachelor.jpg',
        plays: '4.3k',
        likes: '132'
      },
      {
        id: 4,
        title: '...and I return to nothingness',
        artist: 'Lorna Shore',
        songCount: 14,
        coverImg: '/dashboard/songs/amanecer.jpg',
        plays: '5.5k',
        likes: '214'
      },
      {
        id: 5,
        title: 'The jaws of life',
        artist: 'Pierce the veil',
        songCount: 15,
        coverImg: '/dashboard/songs/jaws.jpg',
        plays: '7.9k',
        likes: '139'
      }
    ];
    
    // Inicialmente mostrar todas las playlists
    this.playlists = [...this.allPlaylists];
  }

  searchMusic(): void {
    if (!this.searchQuery.trim()) {
      this.playlists = [...this.allPlaylists];
      return;
    }
    
    const query = this.searchQuery.toLowerCase();
    this.playlists = this.allPlaylists.filter(playlist => 
      playlist.title.toLowerCase().includes(query) || 
      playlist.artist.toLowerCase().includes(query)
    );
  }

  generateMusic(): void {
    if (!this.creationPrompt.trim()) {
      alert('Por favor, ingresa una descripción para generar música.');
      return;
    }
    
    // Aquí iría la lógica para enviar la prompt a un servicio de IA
    // Por ahora solo mostraremos un mensaje
    alert(`Generando música basada en: ${this.creationPrompt}`);
    
    // En un caso real, este sería el punto donde redirigirías al usuario 
    // a una página de resultados o mostrarías un modal con la música generada
  }
}
