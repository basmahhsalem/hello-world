import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalsComponent } from './goals/goals.component';
import { ExperiencesComponent } from './experiences/experiences.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'experiences', component: ExperiencesComponent }
];
