import { FormGroupComponent } from './form-group/form-group.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ViewModeComponent } from './view-mode/view-mode.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { viewReducer } from './Store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    ViewModeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ view: viewReducer }),
    InputTextModule,
    ButtonModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Specify the maximum number of actions to be stored
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
