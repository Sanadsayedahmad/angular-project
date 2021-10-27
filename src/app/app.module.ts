import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

// import firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

//firebase auth guard for routing  
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {AngularFireAuthGuardModule} from "@angular/fire/compat/auth-guard";



// firebase db configuration (from the website)
const firebaseConfig = {
  apiKey: "AIzaSyC0XePTmaMyGMZiqjvsQtkDP5HlkAuNDTs",
  authDomain: "customersapp-56382.firebaseapp.com",
  databaseURL: "https://customersapp-56382-default-rtdb.firebaseio.com",
  projectId: "customersapp-56382",
  storageBucket: "customersapp-56382.appspot.com",
  messagingSenderId: "216968246069",
  appId: "1:216968246069:web:d42eb438ed6c6eec19d27c",
  measurementId: "G-4LY27NXXKE"
};

// adding the imports and the declarations include the routing 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthGuardModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    RouterModule.forRoot([
      {path:'customers', component:CustomerPageComponent, canActivate:[AngularFireAuthGuard]},
      {path:'contacts', component:ContactsPageComponent,canActivate:[AngularFireAuthGuard]},
      {path:'login', component:LoginPageComponent},
      {path:'**', redirectTo:'login'}
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
