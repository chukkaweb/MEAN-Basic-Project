import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
// import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ContactComponent } from './components/contact/contact.component';
import { appRoutes } from './Routes/app.routes';
import { DashboardService } from './services/dashboard.service';
import { LoginService } from './services/login.service';
import { MysqlComponent } from './components/mysql/mysql.component';
import { MongodbComponent } from './components/mongodb/mongodb.component';
import { StaticComponent } from './components/static/static.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent,
    AboutComponent, LogoutComponent, ContactComponent, MysqlComponent, MongodbComponent, StaticComponent, HomeComponent, IndexComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)/* HttpModule */
  ],
  providers: [DashboardService, LoginService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
