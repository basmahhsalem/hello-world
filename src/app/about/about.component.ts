import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  handleImageError(event: any) {
    console.error('Error loading image:', event);
    // Fallback to a default image or hide the image container
    event.target.style.display = 'none';
  }
}
