import { Component, OnInit } from '@angular/core';
import { MobileQueryService } from '../mobile-query.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  users: User[] = [];
  mobileNumber: string = ''; 
  person = {
    firstName: '',
    lastName: '',
  };
  constructor(private mobileQueryService: MobileQueryService) {}

  search(phoneNumber: string) {
    if (phoneNumber.toString().length >= 3) {
      this.mobileQueryService.getByPhoneNumber(phoneNumber).subscribe( (data : User[]) => {
        this.users = data;
      }, error => {
        console.error(error);
      });
    }
  }

  onUserSelected(user: User) {
 // bind properties
 this.person.firstName = user.firstName;
 this.person.lastName = user.lastName;

 if (user && user.contactNo) {
  const contactParts = user.contactNo.split(';');
  this.mobileNumber = contactParts.length > 1 ? contactParts[1] : user.contactNo;
}
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.mobileQueryService.signUp(form.value.firstName + ' ' + form.value.lastName, form.value.mobile).subscribe(response => {
        alert('submit success')
      });
    }
  }
  }
