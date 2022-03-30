import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { MenuComponent } from './pages/menu/menu.component';
import { Error404Component } from './pages/error404/error404.component';
import { JumbotronComponent } from './pages/home/components/jumbotron/jumbotron.component';
import { BannerComponent } from './pages/home/components/banner/banner.component';
import { CardapioComponent } from './pages/home/components/cardapio/cardapio.component';
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from './pages/about/components/description/description.component';
import { TeamComponent } from './pages/about/components/team/team.component';
import { InfoComponent } from './pages/contact/components/info/info.component';
import { FormComponent } from './pages/contact/components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from "@ngneat/error-tailor";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    // MenuComponent,
    Error404Component,
    JumbotronComponent,
    BannerComponent,
    CardapioComponent,
    DescriptionComponent,
    TeamComponent,
    InfoComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Preencha este Campo',
          minlength: ({ requiredLength, actualLength }) => 
                      `Espero ${requiredLength} Caracteres,Mas Tem Somente ${actualLength}`,
          email: error => `Insira Um E-mail Valido`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
