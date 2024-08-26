import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopComponent } from './components/top/top.component';
import { ItemsComponent } from './components/items/items.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { CrearPlantaComponent } from './components/modals/crear-planta/crear-planta.component';
import { EditPlantaComponent } from './components/modals/edit-planta/edit-planta.component';


@NgModule({
  declarations: [
    AppComponent,
    SiderbarComponent,
    DashboardComponent,
    TopComponent,
    ItemsComponent,
    TablaComponent,
    IndicadoresComponent,
    HomeComponent,
    LoginComponent,
    CrearPlantaComponent,
    EditPlantaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
