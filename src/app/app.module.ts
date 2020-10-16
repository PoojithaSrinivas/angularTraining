import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';  
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: RegistrationComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

