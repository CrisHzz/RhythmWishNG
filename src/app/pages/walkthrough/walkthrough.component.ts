import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-walkthrough',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './walkthrough.component.html',
  styleUrl: './walkthrough.component.css'
})
export class WalkthroughComponent {

}
