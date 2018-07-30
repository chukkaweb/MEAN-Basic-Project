import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { ContactComponent } from '../components/contact/contact.component';
import { MysqlComponent } from '../components/mysql/mysql.component';
import { MongodbComponent } from '../components/mongodb/mongodb.component';
import { StaticComponent } from '../components/static/static.component';
 export const appRoutes: Routes = [
    { path: '', component: LoginComponent},
     { path: 'dashboard', component: DashboardComponent, children: [
     { path: 'home', component: HomeComponent},
     { path: 'about', component: AboutComponent},
     { path: 'mysql', component: MysqlComponent},
     { path: 'mongodb', component: MongodbComponent},
     { path: 'static', component: StaticComponent},
     { path: 'contact', component: ContactComponent},
     { path: 'logout', component: LogoutComponent},
     { path: '', redirectTo: '', pathMatch: 'full' }
     ]}
    ];
