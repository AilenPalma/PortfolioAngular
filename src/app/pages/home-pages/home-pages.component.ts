import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ContactIconComponent } from '../../../assets/contact-icon/contact-icon.component';

@Component({
  selector: 'app-home-pages',
  imports: [NavbarComponent,ContactIconComponent],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent {

}
