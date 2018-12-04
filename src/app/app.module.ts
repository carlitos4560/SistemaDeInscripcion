import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsComponent } from './components/components.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { FootherComponent } from './components/foother/foother.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent} from './components/home/home.component';

import { MaterialModule } from './material';


import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ProyectComponent,
    TeacherComponent,
    FootherComponent,
    EditFormComponent,
    FormComponent,
    EditarPerfilComponent,
    HomeComponent,
    Error404Component,
    LoginComponent,
    FormularioComponent,
    NavComponent,
    InfoUserComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
