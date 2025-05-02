import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateSongComponent } from './pages/create-song/create-song.component';
import { GenresComponent } from './pages/genres/genres.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { WalkthroughComponent } from './pages/walkthrough/walkthrough.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrandingComponent } from './branding/branding.component';

export const routes: Routes = [
  { path: '', component: BrandingComponent, pathMatch: 'full' }, 
  { path: 'branding', component: BrandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'create-song', component: CreateSongComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'walkthrough', component: WalkthroughComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'branding' } 
];
