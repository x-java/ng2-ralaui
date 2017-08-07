import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './demo/list/list.component';
import { DetailsComponent } from './demo/details/details.component';
import { PromptComponent } from './public/prompt/prompt.component';
import { ConfirmComponent } from './public/confirm/confirm.component';
import { LoadingComponent } from './public/loading/loading.component';
import { FormComponent } from './tmpl/form/form.component';
import { TableComponent } from './tmpl/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContainerComponent,
    WelcomeComponent,
    ListComponent,
    DetailsComponent,
    PromptComponent,
    ConfirmComponent,
    LoadingComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
