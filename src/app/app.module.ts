import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* services */
import { LoadingService } from './public/loading/loading.service';
import { PromptService } from './public/prompt/prompt.service'

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
import { FormComponent } from './element/form/form.component';
import { TableComponent } from './element/table/table.component';
import { BlockComponent } from './public/block/block.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './element/button/button.component';
import { InputComponent } from './element/form/input/input.component';
import { SelectComponent } from './element/form/select/select.component';
import { TextareaComponent } from './element/form/textarea/textarea.component';
import { RadioComponent } from './element/form/radio/radio.component';
import { CheckboxComponent } from './element/form/checkbox/checkbox.component';
import { SwitchComponent } from './element/form/switch/switch.component';
import { PagesComponent } from './public/pages/pages.component';
import { IconfontComponent } from './element/iconfont/iconfont.component';
import { EditorComponent } from './element/editor/editor.component';
import { DatepickerComponent } from './public/datepicker/datepicker.component';

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
    TableComponent,
    BlockComponent,
    ErrorComponent,
    SearchComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent,
    SwitchComponent,
    PagesComponent,
    IconfontComponent,
    EditorComponent,
    DatepickerComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularEchartsModule
  ],
  providers: [LoadingService, PromptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
