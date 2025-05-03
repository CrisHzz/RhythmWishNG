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
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' }, 
  { path: 'branding', component: BrandingComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'create-song', component: CreateSongComponent, canActivate: [AuthGuard] },
  { path: 'genres', component: GenresComponent, canActivate: [AuthGuard] },
  { path: 'charts', component: ChartsComponent, canActivate: [AuthGuard] },
  { path: 'walkthrough', component: WalkthroughComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' } 
];
