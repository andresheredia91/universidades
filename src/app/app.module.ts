import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
//import { IonicStorageModule } from '@ionic/storage-angular';

import { UniversidadesComponent } from './components/universidades/universidades.component';
import { UniversidadListComponent } from './components/universidades/universidad-list/universidad-list.component';
import { UniversidadComponent } from './components/universidades/universidad/universidad.component';
import { UniversidadService } from './services/universidad.service';



@NgModule({
  declarations: [
    AppComponent,
    UniversidadesComponent,
    UniversidadListComponent,
    UniversidadComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    FCM,
    UniversidadService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
