import { Component, OnInit } from '@angular/core';
import { ContactsServise } from './contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {

  contacts : any;
  searchName :string;
  // gtiing all the cobtacts data from the service
  constructor(private service: ContactsServise) { 
    service.getContacts(data => {
      this.contacts = data;
    });
  }

  //function to filtering the contacts with the input field
    filterContact(contact){
      return this.searchName && contact.name.indexOf(this.searchName) == -1;
    }
  

}