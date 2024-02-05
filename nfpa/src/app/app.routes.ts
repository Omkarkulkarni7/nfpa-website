import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { TotalSystemsComponent } from './total-systems/total-systems.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    {path: 'about',component: AboutpageComponent},
    {path: 'total-systems',component: TotalSystemsComponent},
    {path: 'contact',component: TotalSystemsComponent},
];
