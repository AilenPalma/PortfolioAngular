import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePagesComponent } from "./pages/home-pages/home-pages.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactIconComponent } from '../assets/contact-icon/contact-icon.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,ContactIconComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Soy export appcomponentts';
}
