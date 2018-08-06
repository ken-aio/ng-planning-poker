import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { RoomComponent, UserDialogComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';

const appRoutes: Routes = [ // 追加
  { path: 'room/:code', component: RoomComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LoginComponent,
    UserDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [
    MatButtonModule,
    MatListModule,
    MatInputModule,
  ],
  entryComponents: [
    UserDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
