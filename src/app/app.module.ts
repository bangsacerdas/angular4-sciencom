

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { StudentComponent } from './components/student/student.component';

import { DataService } from './services/data.service';
import { StudentService } from './services/student.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
