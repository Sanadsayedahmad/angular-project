import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

//collection name
const contactsList = 'contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactsServise {

  //provide a service with the constructor
  constructor(private db: AngularFireDatabase) {}

  getContacts(callback) {
    this.getList()
      .snapshotChanges()
      .subscribe(data => {
        let newArray = [];
        data.map((item: any) => {
          let newItem = item.payload.val();
          newItem.key = item.payload.key;
          newArray.push(newItem);
        });
        callback(newArray);
      });
  }

  private getList(key = '') {
    return this.db.list(contactsList + key);
  }

}
