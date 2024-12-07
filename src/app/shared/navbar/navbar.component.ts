import { Component, OnInit,Renderer2 } from '@angular/core';
import { SkillsComponent } from '../../features/components/skills/skills.component';
import { AboutComponent } from '../../features/components/about/about.component';
import { Router, RouterModule,NavigationEnd } from '@angular/router';
import { HostListener } from '@angular/core';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  isNavbarHidden = true;

  constructor(private renderer: Renderer2) {
    // Detecta clics en el documento
    this.renderer.listen('document', 'click', (event: Event) => {
      this.closeNavbarOnOutsideClick(event);
    });
  }

  toggleNavbar(): void {
    this.isNavbarHidden = !this.isNavbarHidden;
  }

  closeNavbarOnOutsideClick(event: Event): void {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.menu-toggle');

    if (
      sidebar &&
      toggleButton &&
      !sidebar.contains(event.target as Node) &&
      !toggleButton.contains(event.target as Node)
    ) {
      this.isNavbarHidden = true;
    }
  }
}



































