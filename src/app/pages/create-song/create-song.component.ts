import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-song',
  standalone: true,
  imports: [CommonModule, SidebarComponent, FormsModule],
  templateUrl: './create-song.component.html',
  styleUrl: './create-song.component.css'
})
export class CreateSongComponent {
  songPrompt: string = '';

  generateSong() {
    console.log('Generando canción con el prompt:', this.songPrompt);
    // Aquí iría la lógica para generar la canción
  }
}
