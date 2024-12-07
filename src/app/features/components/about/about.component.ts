import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

//<h1>About Section</h1>
// <p>Content for the About section. ID: {{ id }}</p>
// <button [routerLink]="['/']">Volver al Home</button>
export class AboutComponent {

    id: string | null;

    constructor(private route: ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
  }
}
