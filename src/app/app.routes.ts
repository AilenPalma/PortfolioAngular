import { Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SkillsComponent } from './features/components/skills/skills.component';
import { AboutComponent } from './features/components/about/about.component';
import { ObjectivesComponent } from './features/components/objectives/objectives.component';
import { ProjectsComponent } from './features/components/projects/projects.component';
import { MotivationComponent } from './features/components/motivation/motivation.component';
import { ContactComponent } from './features/components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomePagesComponent }, // Ruta inicial
 // { path: 'me-presento', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'skills/:id', component: SkillsComponent },
  { path: 'objectives/:id', component: ObjectivesComponent },
  { path: 'projects/:id', component: ProjectsComponent },
  { path: 'motivation/:id', component: MotivationComponent},
  { path: 'contact/:id', component: ContactComponent},
  { path: '**', redirectTo: '' } // Ruta por defecto
];
