import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Mainlayout } from './mainlayout/mainlayout';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';
import { Pricing } from './pricing/pricing';
import { ChatComponent } from './chat/chat';
import { Footchat } from './footchat/footchat';
export const routes: Routes = [

  { path: 'login', component: Login },

  {
    path: '',
    component: Mainlayout,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: Home },
      { path: 'profile', component: Profile },
      { path: 'privacy', component: Privacy },
      { path: 'terms', component: Terms },
      { path: 'pricing', component: Pricing },
      { path: 'chat/:type/:name', component: ChatComponent },
  { path: 'footchat', component: Footchat }
    ]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];